module.exports = function (sequelize, DataTypes) {
  let Sessao = sequelize.define('Session', {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Token session is required'
        }
      }
    }
  }, {
      freezeTableName: true
    });
  Sessao.associate = function (models) {
    Sessao.belongsTo(models.User, {
      onDelete: 'CASCADE'
    })
  }
  return Sessao;
};
