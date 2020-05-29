const express = require('express')
const app = express()
const port = 3000



app.use((req, res, next) => {
  const now = new Date()
  const reqMessage = `${now.toLocaleString('zh-TW', { timeZone: "Asia/Taipei", hour12: false })} | ${req.method} From ${req.originalUrl}`


  res.on('finish', () => {
    const resTime = new Date()
    console.log(`${reqMessage} | total time: ${Math.abs(resTime - now)}ms`)
  })


  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})