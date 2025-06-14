export = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
  
    db: {
        database: process.env.DB_DATABASE,
        schema: process.env.SCHEMA,
        
    },
    jwtConfig: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN
    }
};
