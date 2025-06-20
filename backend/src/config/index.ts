import path from 'path';
import process from 'process';
const dbFilePath = process.env.DB_FILE
    ? path.join(process.cwd(), process.env.DB_FILE)
    : path.join(process.cwd(), 'dist/db/dev.db')
export = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    dbFile: dbFilePath,
    db: {
        database: process.env.DB_DATABASE,
        schema: process.env.SCHEMA,

    },
    jwtConfig: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN
    }
};
