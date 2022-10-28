exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
};

exports.list = function(req, res, next){
    res.render('todo/list', {
        title: 'To-Do List'
    });
}