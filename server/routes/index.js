const Router = require ('express')
const router = new Router()
const articlesRouter = require ('./articlesRouter')
const authorsRouter = require ('./authorsRouter')
const companyRouter = require ('./companyRouter')
const infobookRouter = require ('./infobookRouter')
const scillsRouter = require ('./skillsRouter')


router.use ('/author', authorsRouter)
router.use ('/book', infobookRouter)
router.use ('/skills', scillsRouter)
router.use ('/company', companyRouter)
router.use ('/articles', articlesRouter)

module.exports = router