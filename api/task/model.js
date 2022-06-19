// build your `Task` model here
const db = require('../../data/dbConfig');

async function getAll() {

    const tasks = await db('tasks')
        .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')

    const adjustedTasks = tasks.map(task => {
        tasks.task_id,
        tasks.task_description,
        tasks.task_notes,
        task.task_completed = task.task_completed ? true : false,
        task.project_name,
        task.project_description
        return task
    })

    return adjustedTasks
}

async function getById(id) {

    const task = await db('tasks').where('task_id', id).first()

    const adjustedTask = {
        task_notes: task.task_notes,
        task_description: task.task_description,
        task_completed: task.task_completed ? true : false
        
    }
    return adjustedTask
}

async function create(task) {
    const [id] = await db('tasks').insert(task)
    return getById(id);
}
module.exports = {
    getAll,
    create
}