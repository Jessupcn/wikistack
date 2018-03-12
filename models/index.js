const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',
{
    logging: false
});


const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        },
        get() {
            const url = this.getDataValue('urlTitle');
            // 'this' allows you to access attributes of the instance
            return '/wiki/' + url;
          },
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});
  
const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});
  
// db.sync({
//     force: true
// })

module.exports = {
    Page: Page,
    User: User,
    db: db
};