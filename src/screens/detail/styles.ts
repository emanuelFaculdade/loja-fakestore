import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f7f5fa;
  padding-left: 24px;
  padding-right: 24px;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 12px;
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

export const DetailScroll = styled.ScrollView`
  flex: 1;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 16px;
  background-color: #ffffff;
  margin-bottom: 16px;
`;

export const DetailsContainer = styled.View`
  gap: 8px;
`;

export const Category = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #6c2bd9;
  text-transform: capitalize;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #201a2b;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 10px;
`;

export const Price = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #1a8927;
`;

export const RatingText = styled.Text`
  font-size: 14px;
  color: #8a8492;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #514a5c;
  margin-top: 8px;
`;

export const AddToCartBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-top-width: 1px;
  border-top-color: #eeeeee;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

export const QuantityButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #f0edf5;
  align-items: center;
  justify-content: center;
`;

export const QuantityButtonText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #201a2b;
`;

export const QuantityValue = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #201a2b;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background-color: #6c2bd9;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 12px;
`;

export const AddToCartText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`;