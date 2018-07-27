module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Nome deve ser preenchido'
        }
      }
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Nome deve ser preenchido'
        }
      }
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '',
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        notEmpty: {
          msg: 'Email must be filled'
        },
        isEmail: {
          msg: 'Your email is invalid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [7, 25],
          msg: 'Password must be 7 characters to 25'
        }
      }
    }
  }, {
      freezeTableName: true
    });

  User.associate = function (models) {
    User.hasMany(models.Session, {
      as: 'Sessions',
      foreignKey: {
        allowNull: false
      }
    });
    User.hasMany(models.Post, {
      as: 'Posts',
      foreignKey: {
        allowNull: false
      }
    });
  }
  return User;
};
