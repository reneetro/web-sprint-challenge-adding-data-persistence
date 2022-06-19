// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAll() {
    return db('resources');
}

async function getById(id) {
    const resource = await db('resources').where('resource_id', id).first()
    return resource;
}

async function create(resource) {
    const [id] = await db('resources').insert(resource)
    return getById(id);
}


module.exports = {
    getAll,
    create
}