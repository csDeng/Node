const koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const path = require('path')

const app = new koa()
const router = new Router()

const cors = async(ctx, next)=>{
    ctx.set("Access-Control-Allow-Origin","*")
    ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    // 请求头设置
    ctx.set(
        "Access-Control-Allow-Headers",
        `Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild,x-token,sessionToken,token`
    );
    ctx.set("Cache-Control","public, max-age=20")

    if (ctx.method == "OPTIONS") {
        ctx.body = 200;
    } else {
        await next()
    }
    
}

app.use(cors)

// 全局前置导航
app.use(async (context, next)=>{
    console.log("context.response=>",context.response)
    await next()
})
app.use( static(
    path.join(__dirname, 'public'),{
        // 因为这里设置响应头限制太大，所以在前面全局设置
    }
))


router.get('/',async ctx=>{
    ctx.header.host = "localhost"
    ctx.body="hello"
})

app.use(router.routes())

app.listen(8080, ()=>{
    console.log("server is running at:\r\n http://localhost:8080")
})