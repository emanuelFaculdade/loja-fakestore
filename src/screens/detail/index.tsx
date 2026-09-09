import { useState } from "react";
import { ScrollView } from "react-native";
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

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  if (!product) {
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
          source={{ uri: product.image }}
          resizeMode="contain"
        />

        <DetailsContainer>
          <Category>{product.category}</Category>

          <Title>{product.title}</Title>

          <PriceRow>
            <Price>R$ {product.price.toFixed(2)}</Price>
            <RatingText>
              ★ {product.rating.rate.toFixed(1)} ({product.rating.count})
            </RatingText>
          </PriceRow>

          <Description>{product.description}</Description>
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

        <AddToCartButton onPress={() => onAddToCart(product, quantity)}>
          <AddToCartText>Adicionar ao carrinho</AddToCartText>
        </AddToCartButton>
      </AddToCartBar>
    </Container>
  );
}