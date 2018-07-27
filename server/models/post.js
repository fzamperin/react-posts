module.exports = function (sequelize, DataTypes) {
  let Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Title must be filled'
        }
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Text must be filled'
        }
      }
    }
  }, {
      freezeTableName: true
    });
  Post.associate = function (models) {
    Post.belongsTo(models.User)
  }

  return Post;
};
