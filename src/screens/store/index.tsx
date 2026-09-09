import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import {
  BottomBar,
  BottomBarButton,
  BottomBarLabel,
  CategoryChip,
  CategoryChipText,
  CenterContent,
  Header,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductTitle,
  RetryButton,
  RetryButtonText,
  ScreenContainer,
  ScreenTitle,
  SearchInput,
  StateText,
} from "./styles";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface StoreProps {
  onOpenDetail: (product: Product) => void;
}

export function Store({ onOpenDetail }: StoreProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(["Todos"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  function loadData() {
    setLoading(true);
    setError(null);

    Promise.all([
      fetch("https://fakestoreapi.com/products").then((response) => {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      }),
      fetch("https://fakestoreapi.com/products/categories").then((response) => {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      }),
    ])
      .then(([productsData, categoriesData]) => {
        setProducts(productsData);
        setCategories(["Todos", ...categoriesData]);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleOpenProduct(product: Product) {
    return console.log("Produto pressionado:", product.title);
  }

  const filteredProducts = products
    .filter((product) => category === "Todos" || product.category === category)
    .filter((product) =>
      product.title.toLowerCase().includes(search.trim().toLowerCase())
    );

  if (loading) {
    return (
      <ScreenContainer>
        <CenterContent>
          <ActivityIndicator size="large" color="#6c2bd9" />
          <StateText>Carregando produtos...</StateText>
        </CenterContent>
      </ScreenContainer>
    );
  }

  if (error) {
    return (
      <ScreenContainer>
        <CenterContent>
          <StateText>Não foi possível carregar os produtos.</StateText>
          <RetryButton onPress={loadData}>
            <RetryButtonText>Tentar novamente</RetryButtonText>
          </RetryButton>
        </CenterContent>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>Loja</ScreenTitle>

        <SearchInput
          placeholder="Buscar produtos"
          value={search}
          onChangeText={setSearch}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryChip
              active={item === category}
              onPress={() => setCategory(item)}
            >
              <CategoryChipText active={item === category}>
                {item}
              </CategoryChipText>
            </CategoryChip>
          )}
        />
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={filteredProducts}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 20, gap: 12, paddingBottom: 90 }}
        renderItem={({ item }) => {
          const imageSource = { uri: item.image };

          return (
            <ProductCard onPress={() => onOpenDetail(item)}>
              <ProductImage source={imageSource} resizeMode="cover" />

              <ProductInfo>
                <ProductTitle numberOfLines={2}>{item.title}</ProductTitle>
                <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
                <ProductRating>
                  ★ {item.rating.rate.toFixed(1)} ({item.rating.count})
                </ProductRating>
              </ProductInfo>
            </ProductCard>
          );
        }}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center", marginTop: 40, color: "#8a8492" }}>
            Nenhum produto encontrado
          </Text>
        )}
      />

      <BottomBar>
        <BottomBarButton>
          <BottomBarLabel active>Início</BottomBarLabel>
        </BottomBarButton>

        <BottomBarButton>
          <BottomBarLabel active={false}>Buscar</BottomBarLabel>
        </BottomBarButton>

        <BottomBarButton>
          <BottomBarLabel active={false}>Carrinho</BottomBarLabel>
        </BottomBarButton>

        <BottomBarButton>
          <BottomBarLabel active={false}>Perfil</BottomBarLabel>
        </BottomBarButton>
      </BottomBar>
    </ScreenContainer>
  );
}
