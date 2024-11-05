import styled from "styled-components/native";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

// Colors
export const Color = {
  primary: `#06C0E0`,
  primary1: `#F68C1E`,
  secondary: `#C0EFF7`,
  secondary1: `#FBD1A5`,
  sec_mix: `#9cb49e`,
  pri_mix: `#7ea67f`,
};

const { primary, primary1, secondary, secondary1 } = Color;

// splash screen
export const AppTitle1 = styled.Text`
  font-size: 64px;
  color: ${primary};
`;
export const AppTitle2 = styled.Text`
  font-size: 64px;
  color: ${primary1};
`;

export const SplashContainer = styled.View`
  justify-content: center;
  background-color: ${secondary1};
  flex: 1;
  align-items: center;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
`;
//Signup
export const SignUpInnerContainer = styled.View`
  flex: 1;
  margin-top: 15px;
  width: 80%;
  max-height: 705px;
  min-height: 705px;
  background-color: #ffff;
  align-items: center;
  border-radius: 15px;
  gap: 10px;
`;
// Login screen
export const StyledContainer = styled.View`
  background-color: ${secondary1};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
`;

export const InnerContainer = styled.View`
  flex: 1;
  margin-top: 15px;
  width: 80%;
  max-height: 330px;
  min-height: 330px;
  background-color: #ffff;
  align-items: center;
  border-radius: 15px;
  gap: 15px;
`;

export const PageLogo = styled.Image`
  margin-top: 50px;
  width: 150px;
  height: 150px;
`;

export const PageTitle = styled.Text`
  margin-top: 10px;
  font-size: 35px;
  font-weight: bold;
  color: ${primary};
`;

export const FormArea = styled.View``;

export const StyledTextInput = styled.TextInput`
  background-color: #f5f5f5;
  padding: 10px;
  padding-left: 8px;
  padding-right: 30px;
  border-radius: 5px;
  font-size: 16px;
  height: 40px;
  width: 230px;
  margin-vertical: 3px;
  margin-bottom: 13px;
  border: 1px solid black;
`;
export const InputLabel = styled.Text`
  font-size: 16px;
  text-align: left;
`;

export const HideIcon = styled.TouchableOpacity`
  right: 5px;
  top: 32px;
  position: absolute;
  z-index: 1;
`;

export const LoginBtn = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${primary};
  height: 40px;
  justify-content: center;
  border-radius: 5px;
  margin-top: 13px;
`;

export const BtnText = styled.Text`
  color: #ffff;
  font-size: 22px;
  text-align: center;
`;

export const ExtraText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const TextLink = styled.TouchableOpacity`
  margin-top: -0px;
`;

export const TextLinkContent = styled.Text`
  color: ${primary1};
  font-size: 15px;
`;
// forgot
export const ForgotInnerContainer = styled.View`
  flex: 1;
  margin-top: 15px;
  width: 80%;
  max-height: 380px;
  min-height: 380px;
  background-color: #ffff;
  align-items: center;
  border-radius: 15px;
  gap: 15px;
`;
// Home
export const StyledHomeContainer = styled.View`
  background-color: ${secondary1};
  flex: 1;
  padding-top: ${StatusBarHeight + 10}px;
`;
export const HeaderContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-height: 200px;
`;
export const HeaderLogo = styled.Image`
  width: 130px;
  height: 130px;
`;
export const HeaderMenu = styled.TouchableOpacity`
  padding-right: 10px;
  height: 40px;
`;

export const WeightContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  height: auto;
  padding: 10px;
`;

export const WeightArea = styled.View`
  width: 40%;
  height: 130px;
  margin-bottom: 10px;
  background-color: ${secondary};
  border: 5px solid ${primary};
  border-radius: 15px;
`;
export const WeightItems = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const WeightText = styled.Text`
  color: ${primary};
  font-size: 20px;
  font-weight: bold;
`;
export const BtnContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
export const BtnArea = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  background-color: ${primary};
  border-radius: 80px;
  justify-content: center;
  align-items: center;
`;
// Menu
export const MenuContainer = styled.View`
  background-color: ${secondary};
  flex: 1;
  align-items: center;
  padding-top: ${StatusBarHeight + 10}px;
`;
export const MenuItems = styled.View`
  width: 80%;
  max-height: 200px;
  min-height: 200px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const MenuUser = styled.Text`
  font-size: 32px;
  margin-vertical: 10px;
  font-weight: bold;
`;
export const MenuLink = styled.TouchableOpacity`
  margin-top: -0px;
`;

export const MenuLinkContent = styled.Text`
  color: ${primary1};
  font-size: 22px;
  margin-vertical: 10px;
`;
export const Line = styled.View`
  max-height: 2px;
  width: 100%;
  margin-vertical: 3px;
  border: 1px solid ${primary};
`;
// change Password
export const ChangePasswordTitle = styled.Text`
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  color: ${primary};
`;
// Delete Account
export const DeleteInnerContainer = styled.View`
  flex: 1;
  margin-top: 15px;
  width: 80%;
  max-height: 300px;
  min-height: 300px;
  background-color: #ffff;
  align-items: center;
  border-radius: 15px;
  gap: 15px;
`;
// Help Request
export const RequestStyledContainer = styled.View`
  background-color: ${secondary1};
  height: 100%;
  padding-top: ${StatusBarHeight + 10}px;
`;
export const RequestInnerContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 350px;
  min-height: 350px;
  background-color: ${secondary};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;
export const RequestTextInput = styled.TextInput`
  background-color: #f5f5f5;
  padding: 10px;
  padding-left: 8px;
  padding-right: 30px;
  border-radius: 5px;
  font-size: 16px;
  height: 40px;
  color: black;
  max-width: 300px;
  min-width: 300px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  border: 1px solid black;
`;
export const RequestBtn = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${primary};
  height: 40px;
  justify-content: center;
  border-radius: 5px;
  margin-top: 13px;
`;
// Map Page
export const MapHeader = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-height: 200px;
  z-index: 1;
  position: relative;
  top: 25px;
`;
export const MapBtnContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  z-index: 1;
  position: relative;
  bottom: 150px;
  pointer-events: none;
`;
export const MapBtnArea = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  background-color: ${primary};
  border-radius: 80px;
  justify-content: center;
  align-items: center;
`;
// Accept Page
export const AcceptStyledContainer = styled.View`
  background-color: ${secondary1};
  height: 80%;
  padding-top: ${StatusBarHeight + 10}px;
`;
export const AcceptInnerContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${secondary};
  z-index: 1;
  bottom: 0;
  width: 100%;
  max-height: 350px;
  min-height: 350px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;
export const AcceptText = styled.TextInput`
  background-color: #f5f5f5;
  padding: 10px;
  padding-left: 8px;
  padding-right: 30px;
  border-radius: 5px;
  font-size: 16px;
  height: 40px;
  max-width: 300px;
  min-width: 300px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  border: 1px solid black;
`;

export const AcceptBtn = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${primary};
  height: 40px;
  justify-content: center;
  border-radius: 5px;
  margin-top: 13px;
`;
