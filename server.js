const Koa = require('koa')
const server = require('koa-static')

const app = new Koa()
app.use(server(`${__dirname}/dist/`))
app.listen(8000)
