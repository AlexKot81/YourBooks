export const getAuthors = (resolve, reject = ()=>{})=>{
    fetch('http://localhost:5000/api/authors')
    .then(data=>data.json(), reject)
    .then(resolve);
}

export const getBooks = (resolve, reject = ()=>{})=>{
    fetch('http://localhost:5000/api/books')
    .then(data=>data.json(), reject)
    .then(resolve);
}

export const getScills = (resolve, reject = ()=>{})=>{
    fetch('http://localhost:5000/api/scills')
    .then(data=>data.json(), reject)
    .then(resolve);
}

export const getCompany = (resolve, reject = ()=>{})=>{
    fetch('http://localhost:5000/api/company')
    .then(data=>data.json(), reject)
    .then(resolve);
}

export const getArticles = (resolve, reject = ()=>{})=>{
    fetch('http://localhost:5000/api/articles')
    .then(data=>data.json(), reject)
    .then(resolve);
}