class SiteController {
    index(req, res) {
        res.render('home');
    }

    // /news:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
