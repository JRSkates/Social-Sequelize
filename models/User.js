const { Model, db, DataTypes } = require('../db/connection');

class User extends Model {
    static {
        User.init({
            username: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: db,
        })
    }
}


module.exports = User;