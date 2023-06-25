import { Text, TouchableOpacity } from "react-native";

const ScreenHeaderBtn = (props) => {
  return <TouchableOpacity>{props.children}</TouchableOpacity>;
};

export default ScreenHeaderBtn;
