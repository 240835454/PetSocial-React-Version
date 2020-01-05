const Koa = require('koa');
const route = require('koa-route');
const axios = require('axios');
const app = new Koa();

app.listen('3000',()=>{
    console.log('端口已在3000开启');
})

const main = ctx=>{
    ctx.body = 'this is main page'
}

const about = async ctx=>{
    await axios.get('http://www.baidu.com/').then(res=>{
        ctx.body = res.data
    })
}

app.use(route.get('/',main))
app.use(route.get('/about',about))
