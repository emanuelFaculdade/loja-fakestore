import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f7f5fa;
`;

export const Header = styled.View`
  padding: 20px 20px 8px 20px;
  gap: 12px;
`;

export const ScreenTitle = styled.Text`
  font-size: 26px;
  font-weight: 700;
  color: #201a2b;
`;

export const SearchInput = styled.TextInput`
  height: 48px;
  border-radius: 12px;
  background-color: #fff;
  padding: 0 16px;
  font-size: 15px;
  border: 1px solid #e6e1ec;
`;

export const CategoryChip = styled.TouchableOpacity<{ active: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  margin-right: 8px;
  background-color: ${({ active }) => (active ? "#6c2bd9" : "#ffffff")};
  border: 1px solid ${({ active }) => (active ? "#6c2bd9" : "#e6e1ec")};
`;

export const CategoryChipText = styled.Text<{ active: boolean }>`
  font-size: 13px;
  font-weight: 600;
  color: ${({ active }) => (active ? "#ffffff" : "#514a5c")};
`;

export const ProductCard = styled.TouchableOpacity`
  flex: 1;
  background-color: #fff;
  border-radius: 16px;
  padding: 10px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 6px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 12px;
  background-color: #f0edf5;
`;

export const ProductInfo = styled.View`
  margin-top: 8px;
  gap: 4px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #2a2530;
  min-height: 34px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: 800;
  color: #1a8927;
`;

export const ProductRating = styled.Text`
  font-size: 12px;
  color: #8a8492;
`;

export const CenterContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px;
`;

export const StateText = styled.Text`
  font-size: 15px;
  color: #514a5c;
  text-align: center;
`;

export const RetryButton = styled.TouchableOpacity`
  background-color: #6c2bd9;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 4px;
`;

export const RetryButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;

export const BottomBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const BottomBarButton = styled.TouchableOpacity`
  align-items: center;
  gap: 2px;
`;

export const BottomBarLabel = styled.Text<{ active: boolean }>`
  font-size: 11px;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active }) => (active ? "#6c2bd9" : "#9a94a0")};
`;
