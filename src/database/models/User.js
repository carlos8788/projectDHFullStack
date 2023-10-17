module.exports = (sequelize, dataTypes) => {
    const alias = "Users";
    const cols = {
        id_user: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: dataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        first_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(255),
            allowNull: true
        }
    }

    const config = {
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    return User
    
}