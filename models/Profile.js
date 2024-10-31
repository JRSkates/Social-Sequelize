const { Model, db, DataTypes } = require('../db/connection');

class Profile extends Model {
    static {
        Profile.init({
            bio: DataTypes.STRING,
            profilePicture: DataTypes.STRING,
            birthday: DataTypes.STRING,
        }, {
            sequelize: db,
        })
    }
}



module.exports = Profile;