const router = new require('express')();

const {getBooks, getAuthors, getScills, getCompany, getArticles} = require('../controllers/authorController')

router.get('/books', getBooks);
router.get('/authors', getAuthors);
router.get('/scills', getScills);
router.get('/company', getCompany);
router.get('/articles', getArticles);

module.exports = router