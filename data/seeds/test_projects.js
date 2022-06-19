/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
  //   `project_id` - primary key
  // - [ ] `project_name` - required
  // - [ ] `project_description` - optional
  // - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided
    {project_name: 'test project', project_description: 'this is a description', project_completed: false},
    {project_name: 'test project 2', project_description: 'this is a description 2', project_completed: true}
  ]);
};
