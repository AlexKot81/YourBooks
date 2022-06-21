const sequelize = require('../db.js')
const { DataTypes } = require('sequelize')

const Authors = sequelize.define ('authors', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_author: {type: DataTypes.STRING, allowNull: false},
    surname_author: {type: DataTypes.STRING, allowNull: false}
})

const InfoBook = sequelize.define ('info_book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_book: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    type_book: {type: DataTypes.STRING, allowNull: false},
    price_book: {type: DataTypes.DOUBLE, allowNull: false},
    currency: {type: DataTypes.STRING, allowNull: false}
})

const Skills = sequelize.define ('skills', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    skills: {type: DataTypes.STRING, allowNull: false}
})

const Company = sequelize.define ('company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img_comp: {type: DataTypes.STRING, allowNull: false},
    name_comp: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false}
})

const Articles = sequelize.define ('articles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img_article: {type: DataTypes.STRING, allowNull: false},
    name_article: {type: DataTypes.STRING, allowNull: false},
    text_article: {type: DataTypes.STRING, allowNull: false},
    data_article: {type: DataTypes.STRING, allowNull: false}
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