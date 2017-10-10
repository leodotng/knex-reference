// Here the KNEX connections happen for the
// rest of the application


const knex = require('knex')

const config = require('./knexfile');


const pg = knex(config.development);
//will initialize knex inside of project


//look at Query Builder

pg.select('*').from('lightsabers')
//returns a promise so use a .then
  .then((data ) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
