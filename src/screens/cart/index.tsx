import { FlatList, View } from "react-native";
import {
  BackButton,
  BackButtonText,
  CartItem,
  CartList,
  CheckoutButton,
  CheckoutText,
  EmptyState,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemTitle,
  QuantityStepper,
  QuantityValue,
  ScreenContainer,
  ScreenTitle,
  StepperButton,
  StepperText,
  SummaryContainer,
  SummaryLabel,
  SummaryRow,
  SummaryValue,
  TotalLabel,
  TotalRow,
  TotalValue,
  TopBar,
} from "./styles";

export interface Product {
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

export interface CartProduct {
  product: Product;
  quantity: number;
}

interface CartProps {
  items: CartProduct[];
  onBack: () => void;
  onChangeQuantity: (productId: number, nextQuantity: number) => void;
}

export function Cart({ items, onBack, onChangeQuantity }: CartProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const freight = items.length > 0 ? 12 : 0;
  const total = subtotal + freight;

  return (
    <ScreenContainer>
      <TopBar>
        <BackButton onPress={onBack}>
          <BackButtonText>←</BackButtonText>
        </BackButton>
        <ScreenTitle>Carrinho</ScreenTitle>
      </TopBar>

      <FlatList
        data={items}
        keyExtractor={(item) => String(item.product.id)}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <CartItem>
            <ItemImage source={{ uri: item.product.image }} resizeMode="cover" />

            <ItemInfo>
              <ItemTitle numberOfLines={2}>{item.product.title}</ItemTitle>
              <ItemPrice>
                R$ {(item.product.price * item.quantity).toFixed(2)}
              </ItemPrice>
            </ItemInfo>

            <QuantityStepper>
              <StepperButton onPress={() => onChangeQuantity(item.product.id, item.quantity - 1)}>
                <StepperText>-</StepperText>
              </StepperButton>

              <QuantityValue>{item.quantity}</QuantityValue>

              <StepperButton onPress={() => onChangeQuantity(item.product.id, item.quantity + 1)}>
                <StepperText>+</StepperText>
              </StepperButton>
            </QuantityStepper>
          </CartItem>
        )}
        ListEmptyComponent={<EmptyState>Seu carrinho está vazio</EmptyState>}
      />

      <SummaryContainer>
        <SummaryRow>
          <SummaryLabel>Subtotal</SummaryLabel>
          <SummaryValue>R$ {subtotal.toFixed(2)}</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Frete</SummaryLabel>
          <SummaryValue>R$ {freight.toFixed(2)}</SummaryValue>
        </SummaryRow>

        <TotalRow>
          <TotalLabel>Total</TotalLabel>
          <TotalValue>R$ {total.toFixed(2)}</TotalValue>
        </TotalRow>

        <CheckoutButton>
          <CheckoutText>Finalizar compra</CheckoutText>
        </CheckoutButton>
      </SummaryContainer>
    </ScreenContainer>
  );
}
