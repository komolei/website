let mongoose = require('mongoose');
// let db=mongoose.createConnection('localhost','test');
let express = require('express');
let app = express();
let router = express.Router();
router.use((req, res, next) => {
    console.log("router use");
    next();
})
app.get('/', (req, res) => {
    res.send("hello mongodb");
})
app.route('/login').get((req, res) => {
    res.send("please login");
})


let User = require('./user.js');
mongoose.connect('mongodb://localhost/komolei')
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection failed'))
db.once('open', function () {
    console.log("success connection");
    // let name=db.col.find();
    // console.log("col",name);
    var user = new User({ username: 'komolei@2th', password: '123456' });
    user.save(function (err) {
        if (err) console.log(err);
    })
    console.log('save success!');
})
let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
})