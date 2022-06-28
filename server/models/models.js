const sequelize = require('../db.js')
const { DataTypes } = require('sequelize')
const {INTEGER, STRING, DOUBLE} = DataTypes

const Authors = sequelize.define ('authors', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name_author: {type: STRING, allowNull: false},
    surname_author: {type: STRING, allowNull: false}
})

const InfoBook = sequelize.define ('info_book', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name_book: {type: STRING, allowNull: false},
    description: {type: STRING, allowNull: false},
    type_book: {type: STRING, allowNull: false},
    price_book: {type: DOUBLE, allowNull: false},
    currency: {type: STRING, allowNull: false},
    img_book: {type: STRING, allowNull: false},
    authorid: {type: INTEGER, allowNull: false}
})

const Skills = sequelize.define ('skills', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    skills_text: {type: STRING, allowNull: false}
})

const Company = sequelize.define ('company', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    img_comp: {type: STRING, allowNull: false},
    name_comp: {type: STRING, allowNull: false},
    text: {type: STRING, allowNull: false}
})

const Articles = sequelize.define ('articles', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    img_article: {type: STRING, allowNull: false},
    name_article: {type: STRING, allowNull: false},
    text_article: {type: STRING, allowNull: false},
    data_article: {type: STRING, allowNull: false}
})

Authors.hasMany(InfoBook)
InfoBook.belongsTo(Authors)

module.exports = {
    Authors,
    InfoBook,
    Skills,
    Company,
    Articles
}