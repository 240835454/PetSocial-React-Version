import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      // 'pages/index/index',
      'pages/order/order',
      'pages/project/project',
      'pages/user/user'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#a6b5d5",
      "selectedColor": "#333333",
      "borderStyle": "black",
      "list": [
        {
          "selectedIconPath": "./static/order-active.png",
          "iconPath": "./static/order.png",
          "pagePath": "pages/order/order",
          "text": "订单管理"
        },
        {
          "selectedIconPath": "./static/project-active.png",
          "iconPath": "./static/project.png",
          "pagePath": "pages/project/project",
          "text": "项目报备"
        },
        {
          "selectedIconPath": "./static/user-active.png",
          "iconPath": "./static/user.png",
          "pagePath": "pages/user/user",
          "text": "个人中心"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
