import dotenv from 'dotenv'
import Http from 'http'
import Koa from 'koa'

dotenv.config()
const app = new Koa()

app.use(async ctx => {
  ctx.body = `${app.env} where123 ${
    ctx.request.querystring
  } and ${JSON.stringify(process.env, null, 4)}`
})

Http.createServer(app.callback()).listen(3000)
