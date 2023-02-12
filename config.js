require('dotenv').config()

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST 
    },
    db: {
        dev: {
            dialect:'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'asd',
            database: 'posts-db',
            port: '5433',

            define: {
                timestamps: true,
                uderscored: true, 
                underscoredAll: true
            }
        },
        QA: {

        },
        prod: {

        }
    }
} 

module.exports = configs