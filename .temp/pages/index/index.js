import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Button } from '@tarojs/components';
import './index.css';


export default class Index extends Taro.Component {

  state = {};
  constructor() {
    super(...arguments);
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  click() {}
  config = {
    navigationBarTitleText: '首页'
  };
  onchangeName() {}
  render() {
    return <View className="index">
     
        <Button onClick={this.click.bind(this)}>改变名字</Button>
        <Text>{this.state.name}</Text>
      </View>;
  }
}