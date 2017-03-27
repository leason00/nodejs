/**
 * Created by Administrator on 2017/3/26.
 */
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

const router = require('koa-router')();         //路由
const bodyParser = require('koa-bodyparser');   //post请求解析
const controller = require('./controller');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// post请求解析
app.use(bodyParser());

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(controller());

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');