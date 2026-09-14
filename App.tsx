import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Store } from "./src/screens/store";
import { ProductDetail } from "./src/screens/detail";
import { Cart } from "./src/screens/cart";

type Product = {
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
};

type CartItem = {
  product: Product;
  quantity: number;
};

export default function App() {
  const [screen, setScreen] = useState<"store" | "detail" | "cart">("store");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const openDetail = (product: Product) => {
    setSelectedProduct(product);
    setScreen("detail");
  };

  const openCart = () => {
    setScreen("cart");
  };

  const goBack = () => {
    setScreen("store");
  };

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, quantity }];
    });
  };

  const updateCartQuantity = (productId: number, nextQuantity: number) => {
    setCartItems((prev) => {
      if (nextQuantity <= 0) {
        return prev.filter((item) => item.product.id !== productId);
      }

      return prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: nextQuantity } : item
      );
    });
  };

  if (screen === "detail") {
    return (
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <ProductDetail
          product={selectedProduct}
          onBack={goBack}
          onAddToCart={addToCart}
        />
      </SafeAreaProvider>
    );
  }

  if (screen === "cart") {
    return (
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Cart
          items={cartItems}
          onBack={goBack}
          onChangeQuantity={updateCartQuantity}
        />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Store onOpenDetail={openDetail} onOpenCart={openCart} />
    </SafeAreaProvider>
  );
}