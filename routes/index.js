var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Головна' });
});
router.get('/countries', function(req, res, next) {
    res.render('countries', { title: 'Країни' });
});
router.get('/tours', function(req, res, next) {
    res.render('tours', { title: 'Тури' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Контакти' });
});

router.post('/contact', function(req, res, next) {
    console.log('Отримано повідомлення: ' + req.body.email);
    res.render('contact-success', { title: 'Контакти' });
});

module.exports = router;