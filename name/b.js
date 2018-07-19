let express = require("express");
let app = express();
app.use(express.static(__dirname)); // 当前文件作为静态文件目录
app.listen(4000);