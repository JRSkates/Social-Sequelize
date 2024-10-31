const { Model, db, DataTypes } = require('../db/connection');

class Comment extends Model {
    static {
        Comment.init({
            body: DataTypes.STRING,
            createdAt: DataTypes.STRING,
        }, {
            sequelize: db,
        })
    }
}


module.exports = Comment;