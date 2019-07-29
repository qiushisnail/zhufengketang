let express = require('express');
let session = require('express-session')
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(session({
  resave: true,
  secret: 'zfpx',
  saveUninitialized: true
}))
app.listen(3000);
app.use(cors())
let sliders = require('./mock/slider');
let lessons = require('./mock/lessons');
app.get('/getSliders', function (req, res) {
  res.json(sliders)
})
app.get('/getLessons/:category', function (req, res) {
  let category = req.params.category;
  let { offset, limit } = req.query;
  offset = isNaN(offset) ? 0 : parseInt(offset); // 偏移量
  limit = isNaN(limit) ? 5 : parseInt(limit); // 每页条数
  let list = JSON.parse(JSON.stringify(lessons));// _.deepClone() 深度克隆
  if (category != 'all') {
    list = list.filter(item => item.category == category)
  }

  let total = list.length
  // 分页数据
  list = list.slice(offset, offset + limit);
  list.forEach(item => item.title = item.title + Math.random())

  setTimeout(() => {
    res.json({
      list,
      hasMore: total > offset + limit
    })
  }, 1000)
})

let users = [];
app.post('/reg', function (req, res) {
  let user = req.body;
  users.push(user);
  res.json({
    success: '注册成功'
  })
})

app.post('/login', function (req, res) {
  let body = req.body;
  let user = users.find(item => item.username === body.username
    && item.password === body.password)
  if (user) {
    req.session.user = user;
    res.json({
      user,
      success: '登录成功'
    })
  } else {
    res.json({
      error: '登录失败'
    })
  }
})