import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  AddToCartBar,
  AddToCartButton,
  AddToCartText,
  BackButton,
  BackButtonText,
  Category,
  Container,
  Description,
  DetailScroll,
  DetailsContainer,
  Price,
  PriceRow,
  ProductImage,
  QuantityButton,
  QuantityButtonText,
  QuantityContainer,
  QuantityValue,
  ScreenTitle,
  Title,
  TopBar,
  RatingText,
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

interface ProductDetailProps {
  product: Product | null;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductDetail({
  product,
  onBack,
  onAddToCart,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [detailProduct, setDetailProduct] = useState<Product | null>(product);
  const [loading, setLoading] = useState(Boolean(product));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!product) {
      setDetailProduct(null);
      setLoading(false);
      setError("Produto não encontrado");
      return;
    }

    let active = true;

    setLoading(true);
    setError(null);
    setDetailProduct(product);

    fetch(`https://fakestoreapi.com/products/${product.id}`)
      .then((response) => {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      })
      .then((data: Product) => {
        if (!active) return;
        setDetailProduct(data);
      })
      .catch(() => {
        if (!active) return;
        setError("Produto não encontrado");
        setDetailProduct(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [product]);

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const selectedProduct = detailProduct ?? product;

  if (loading) {
    return (
      <Container>
        <TopBar>
          <BackButton onPress={onBack}>
            <BackButtonText>←</BackButtonText>
          </BackButton>
          <ScreenTitle>Detalhe</ScreenTitle>
        </TopBar>

        <DetailScroll
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#6c2bd9" />
          <Title style={{ textAlign: "center", marginTop: 12 }}>
            Carregando produto...
          </Title>
        </DetailScroll>
      </Container>
    );
  }

  if (!selectedProduct || error) {
    return (
      <Container>
        <TopBar>
          <BackButton onPress={onBack}>
            <BackButtonText>← Voltar</BackButtonText>
          </BackButton>

          <ScreenTitle>Detalhe</ScreenTitle>
        </TopBar>

        <DetailScroll
          contentContainerStyle={{ flex: 1, justifyContent: "center" }}
        >
          <Title style={{ textAlign: "center" }}>Produto não encontrado</Title>
        </DetailScroll>
      </Container>
    );
  }

  return (
    <Container>
      <TopBar>
        <BackButton onPress={onBack}>
          <BackButtonText>←</BackButtonText>
        </BackButton>

        <ScreenTitle>Detalhe</ScreenTitle>
      </TopBar>

      <DetailScroll showsVerticalScrollIndicator={false}>
        <ProductImage
          source={{ uri: selectedProduct.image }}
          resizeMode="contain"
        />

        <DetailsContainer>
          <Category>{selectedProduct.category}</Category>

          <Title>{selectedProduct.title}</Title>

          <PriceRow>
            <Price>R$ {selectedProduct.price.toFixed(2)}</Price>
            <RatingText>
              ★ {selectedProduct.rating.rate.toFixed(1)} ({selectedProduct.rating.count})
            </RatingText>
          </PriceRow>

          <Description>{selectedProduct.description}</Description>
        </DetailsContainer>
      </DetailScroll>

      <AddToCartBar>
        <QuantityContainer>
          <QuantityButton onPress={decreaseQuantity}>
            <QuantityButtonText>-</QuantityButtonText>
          </QuantityButton>

          <QuantityValue>{quantity}</QuantityValue>

          <QuantityButton onPress={increaseQuantity}>
            <QuantityButtonText>+</QuantityButtonText>
          </QuantityButton>
        </QuantityContainer>

        <AddToCartButton onPress={() => onAddToCart(selectedProduct, quantity)}>
          <AddToCartText>Adicionar ao carrinho</AddToCartText>
        </AddToCartButton>
      </AddToCartBar>
    </Container>
  );
}