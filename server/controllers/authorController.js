const {Authors, InfoBook, Company, Articles, Skills} = require ('../models/models')

class AuthorController {
    
    async getBooks (req, res) {
        const books = await InfoBook.findAll();
        return res.send(books)
    }

    async getAuthors (req, res) {
        const authors = await Authors.findAll();
        return res.send(authors)
    }

    async getScills(req, res) {
        const scill = await Skills.findAll();
        return res.send(scill)
    }

    async getCompany(req, res) {
        const company = await Company.findAll();
        return res.send(company)
    }

    async getArticles(req, res) {
        const company = await Articles.findAll();
        return res.send(company)
    }
}

module.exports = new AuthorController()