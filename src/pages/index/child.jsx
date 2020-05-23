import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.css'

class Child extends Component{
    componentDidHide(){

    }
    componentDidMount(){

    }
    componentDidShow(){

    }
    componentWillUnmount () { 

    }
    componentWillMount () { 

    }
    onchangeName(){
        this.props.onchange();
    }
   render(){
       return(
            <View>
                <Button onClick={this.onchangeName.bind(this)}>success</Button>
            </View>
       )
   }
}
Child.defaultProps={
  
}
export default Child;