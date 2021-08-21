// 路由器

app
.get('/index',(req,res)=>{
    res.send('index')
})
.get('/login',(req,res)=>{
    res.send('login')
})
.post('register',(req,res)=>{
    res.send('register')
})