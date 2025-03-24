class NewsController {
    index(req, res) {
        res.render('news');
    }

    // /news:slug
    show(req, res) {
        res.send('News details');
    }
}

module.exports = new NewsController();
