import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './top.less';
class Top extends Taro.Component {
  render() {
    return <View className="top">
			<View className="left">
			  <Image className="img" src={require("../../assets/img/left.png")} />
			</View>
			<View className="right">
			<Image className="img" src={require("../../assets/img/search.png")} />
			<Image className="img" src={require("../../assets/img/collect.png")} />
			<Image className="img" src={require("../../assets/img/tuan.png")} />
			<Image className="img" src={require("../../assets/img/lue.png")} />
			</View>
		</View>;
  }
}
export default Top;