const http = require('http');

const server = http.createServer((rec,res)=>{
    //console.log(rec)
    //res.write('Welcome to our home page')
    //res.end()
    if(rec.url === '/'){
        res.end('Welcome to our home page')
    }
    if(rec.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)