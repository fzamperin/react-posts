const gulp = require('gulp');
const crypto = require('crypto');

var models = require('./models');


//Desenvolvimento
/**
 * Gera as tabelas no banco da dados de acordo com os models,
 * se estas ainda não existirem
 */
gulp.task('sequelize', function () {
  return models.sequelize.sync({}).then(() => {
    process.exit(0);
  }, err => {
    console.log(err);
    process.exit(1);
  })
});

/**
 * Dropa todas as as tabelas do banco e depois
 * gera tabelas para todos os models configurados
 */
gulp.task('sequelize:drop', function () {
  return models.sequelize.sync({
    force: true
  }).then(() => {
    process.exit(0);
  }, err => {
    console.log(err);
    process.exit(1);
  })
});

gulp.task('default');
