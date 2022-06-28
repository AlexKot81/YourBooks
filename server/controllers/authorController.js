const {Authors, InfoBook, Company, Articles, Skills} = require ('../models/models')

class AuthorController {
    async create (req, res) {
        const author = await Skills.create(
        {
            skills_text: "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
        });
        return res.send(author)
    }

    async getAll (req, res) {
        //const authors = await Authors.findAll();
        const authors = await Skills.findAll();
        return res.send(authors)
    }

    async getOne(req, res) {
        
    }

    async del(req, res) {
        
    }
}

module.exports = new AuthorController()