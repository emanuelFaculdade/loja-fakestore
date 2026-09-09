import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Store } from "./src/screens/store";
import { ProductDetail } from "./src/screens/detail";

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

export default function App() {
  const [screen, setScreen] = useState<"store" | "detail">("store");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openDetail = (product: Product) => {
    setSelectedProduct(product);
    setScreen("detail");
  };

  const goBack = () => {
    setScreen("store");
  };

  const addToCart = (product: Product, quantity: number) => {
    console.log("Adicionar ao carrinho:", product.title, quantity);
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

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Store onOpenDetail={openDetail} />
    </SafeAreaProvider>
  );
}