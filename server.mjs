import { createServer } from 'http'

const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello!')
}

const server = createServer(requestHandler)
server.listen(port, (err) => {
  if(err){
    return console.log('Something went wrong', err)
  }
  console.log('Server is Listening on ${port}')
})
