import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.css'
import Child from './child.jsx'

export default class Index extends Component {

  state={
    
  }
  constructor(){
    super(...arguments);
  }
  componentWillMount () { }

  componentDidMount () { 
   
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  click(){
  
  }
  config = {
    navigationBarTitleText: '首页'
  }
  onchangeName(){
    
  }
  render () {
    return (
      <View className='index'>
     
        <Button onClick={this.click.bind(this)}>改变名字333</Button>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
