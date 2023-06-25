import { Text, TouchableOpacity } from "react-native";

const ScreenHeaderBtn = (props) => {
  console.log(props);

  return (
    <TouchableOpacity onPress={props.handleShare}>
      {props.children}
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
