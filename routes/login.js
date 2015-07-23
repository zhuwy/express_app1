var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Wenyan' });
});
router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var result = validate(username,password);
  if(result){
  	res.send('OK');
  }
  else{
  	res.send('Error');
  }
  // console.log(username);

});
router.get('/repeat',function(req,res,next) {
	// body...
	var un = req.query.name;
	var list = ['aa','bb','cc'];
	if(list.indexOf(un) > -1){
		res.json({repeat:true});
	}else{
		res.json({repeat:false});
	}
});
function validate(username,password){
	if(username == 'zwy' && password == '1'){
		return true;
	}
	return false; 
}
module.exports = router; 