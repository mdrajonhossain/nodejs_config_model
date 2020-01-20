var express = require('express');
var router = express.Router();




const ArticlesController = require("../controllers/AuthController");
const controller = new ArticlesController();



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/view", (req, res) => controller.liste(req, res));
router.get("/view", (req, res) => controller.liste(req, res));




module.exports = router;
