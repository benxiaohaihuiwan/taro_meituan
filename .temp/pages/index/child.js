import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Button } from '@tarojs/components';
import './index.css';

class Child extends Taro.Component {
  componentDidHide() {}
  componentDidMount() {}
  componentDidShow() {}
  componentWillUnmount() {}
  componentWillMount() {}
  onchangeName() {
    this.props.onchange();
  }
  render() {
    return <View>
                <Button onClick={this.onchangeName.bind(this)}>success</Button>
            </View>;
  }
}
Child.defaultProps = {};
export default Child;