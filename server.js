// Importing expressjs

const express = require('express')
const app =express()

app.get('/',(req,res)=>{
    res.send('hello world')
})

const PORT=3000

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})