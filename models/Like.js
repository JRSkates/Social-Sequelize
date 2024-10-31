const { Model, db, DataTypes } = require('../db/connection');

class Like extends Model {
    static {
        Like.init({
            reactionType: DataTypes.STRING,
            createdAt: DataTypes.STRING,
        }, {
            sequelize: db,
        })
    }
}

module.exports = Like;