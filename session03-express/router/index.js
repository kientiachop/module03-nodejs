var express = require('express');
var router = express.Router();

// Ví dụ lấy tất cả user
// Lấy dữ liệu
router.get('/', (req, res) => {
    // res.write('Hello World!');
    res.send('Lấy tất cả user');
})
router.post('/', (req, res) => {
    // Có thể dùng destructoring để lấy giá trị
    console.log(req.body);
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    // res.write('Trả về 1 user', 'utf-8');
    res.send("Trả về 1 user");
})
module.exports = router
// module.exports = {router}
/*
    export default router
 */