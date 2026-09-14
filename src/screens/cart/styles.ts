import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f7f5fa;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 8px 20px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px 0px;
`;

export const BackButtonText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #6c2bd9;
`;

export const ScreenTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #201a2b;
`;

export const CartList = styled.FlatList`
  flex: 1;
  padding: 12px 20px 16px 20px;
`;

export const CartItem = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  padding: 12px;
  margin-bottom: 12px;
  gap: 12px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 6px;
`;

export const ItemImage = styled.Image`
  width: 74px;
  height: 74px;
  border-radius: 12px;
  background-color: #f0edf5;
`;

export const ItemInfo = styled.View`
  flex: 1;
  gap: 4px;
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #2a2530;
`;

export const ItemPrice = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #1a8927;
`;

export const QuantityStepper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const StepperButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: #f0edf5;
  align-items: center;
  justify-content: center;
`;

export const StepperText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #201a2b;
`;

export const QuantityValue = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #201a2b;
`;

export const SummaryContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const SummaryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const SummaryLabel = styled.Text`
  font-size: 15px;
  color: #514a5c;
`;

export const SummaryValue = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #201a2b;
`;

export const TotalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const TotalLabel = styled.Text`
  font-size: 17px;
  font-weight: 800;
  color: #201a2b;
`;

export const TotalValue = styled.Text`
  font-size: 17px;
  font-weight: 800;
  color: #1a8927;
`;

export const CheckoutButton = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: #6c2bd9;
  border-radius: 12px;
  padding: 14px 18px;
  align-items: center;
`;

export const CheckoutText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;

export const EmptyState = styled.Text`
  text-align: center;
  margin-top: 40px;
  color: #8a8492;
  font-size: 15px;
`;
