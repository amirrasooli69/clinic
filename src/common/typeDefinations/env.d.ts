namespace NodeJS {
    interface processEnv {
        //Aplication
        PORT: number;
        //Database
        DB_PORT: number;
        DB_NAME: string;
        DB_USERNAME: string;
        DB_PASSWORD: string;
        DB_HOST: string;
        //JWT
        ACCESS_TOKEN_SECRET: string;
        REFRESH_TOKEN_SECRET: string;

    }
}