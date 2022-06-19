// build your `Project` model here
const db = require('../../data/dbConfig');

async function getAll() {
    const result = await db('projects')
    const adjustedResult = result.map(project => {
        project.project_name,
        project.project_description,
        project.project_completed = project.project_completed ? true : false
        return project
    })
    return adjustedResult
}

async function getById(id) {

    const project = await db('projects').where('project_id', id).first()

    const adjustedProject = {
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: project.project_completed ? true : false
        
    }
    console.log(adjustedProject)
    return adjustedProject
}

async function create(project) {
    const [id] = await db('projects').insert(project)
    console.log(project)
    return getById(id);
}


module.exports = {
    getAll,
    create,
    
}