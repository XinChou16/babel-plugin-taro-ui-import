import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtButton, AtProgress } from 'taro-ui'
// import "taro-ui/dist/style/components/modal.scss";

import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>
          btn
        </AtButton>
        {/* <AtProgress percent={25} /> */}
      </View>
    )
  }
}
