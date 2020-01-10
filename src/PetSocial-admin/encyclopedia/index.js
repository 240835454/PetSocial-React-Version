/*
 * @Description: 
 * @Version: 2.0
 * @Author: TanXinFeng
 * @Date: 2020-01-07 09:31:40
 * @LastEditors  : TanXinFeng
 * @LastEditTime : 2020-01-09 14:19:39
 */
const Koa = require('koa');
const route = require('koa-route');
const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const app = new Koa();

// (async ()=>{
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.baidu.com');
//     await page.screenshot({
//         path: ''
//     })
// })();

app.listen('3000',()=>{
    console.log('端口已在3000开启');
})

const main = ctx=>{
    ctx.body = 'this is main page'
}  

const about = async ctx=>{
    // ctx.body = 'this is about'
    await axios.get('http://www.yc.cn/api/searchPetData.do?petRaceId=1&pageNum=1&pageSize=8&keyword=&baseInfo=&detailInfo=&jsonCallback=jQuery111301581238758497967_1578539634363&_=1578539634365').then(res=>{
        // ctx.body = res.data.list;
        // console.log(JSON.parse(res.data));
        let html = res.data;
        const $ = cheerio.load(html);
        $('.pic').each(function(index,element){
            console.log(index,element);
        })
         ctx.body = 'this is about'
        // console.log($('.pic'));
        // ctx.res.on("data",function(data){
        //     html += data;
        // })
        // ctx.res.on("end",function(){
        //     // let fileData = "";
        //     const $ = cheerio.load(html);
        //     ctx.body = $;
        // })
    })
} 

app.use(route.get('/',main))
app.use(route.get('/about',about))
