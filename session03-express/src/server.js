const express = require('express');
var bodyParser = require('body-parser');
var router = require('../router/index.js');
const app = express();
// Tạo ra 1 đối tượng app
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Trong đối tượng app cung cấp các phương thức 
// Lấy 1 user thì làm như thế nào
// Tiêu chuẩn resful API
console.log(router);
app.use('/app/v1/users', router);
// Xóa dữ liệu
app.delete('/app/v1/users/:id', (req, res) => {
    res.send("Trả về 1 users");
})
// Update put update hết các trường dữ liệu
// Nếu đối tượng có 5 trường mà mình đi update 1 trường 
// thì đối tượng còn 1 trường 4 trường kia mất
app.put('/app/v1/users/:id', (req, res) => {
    res.send("Trả về 1 users");
})
// Update patch update trường mà mình cần update
// Nếu đối tượng cần update có 5 trường mình đi update 1 trường thì
// 4 trường còn lại vẫn giữ nguyên
app.put('/app/v1/users/:id', (req, res) => {
    res.send("Trả về 1 users");
})
app.listen(port,  () => {
    console.log(`Server đang gọi trên port: http://localhost:${port}`);
})