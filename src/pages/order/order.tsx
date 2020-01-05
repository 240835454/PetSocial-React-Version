import Taro, { Component, Config } from '@tarojs/taro'


export default class order extends Component {
    config: Config = {
        navigationBarTitleText: '订单管理'
    }
    componentDidMount () {  
        Taro.request({   
          url: 'http://localhost:3000/about',    
          header:{
            //   'content-type': 'application/json' 
          }   
        }).then(res=>{
          console.log(res.data);
        }).catch(err=>{
          console.log(err); 
        })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
