const { Model, db, DataTypes } = require('../db/connection');

class Post extends Model {
    static {
        Post.init({
            title: DataTypes.STRING,
            body: DataTypes.STRING,
            createdAt: DataTypes.STRING,
        }, {
            sequelize: db,
        })
    }
}


module.exports = Post;