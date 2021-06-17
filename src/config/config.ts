interface Config {
    mongoHost: string
    mongoPort: string
    mongoDB: string
    serverHost: string
    serverPost: string
    redisPort : string
}

export const config: Config = ({
    mongoHost : "localhost",
    mongoPort : "27017",
    mongoDB : "test",
    serverHost : "localhost",
    serverPost : "3000",
    redisPort : "6379"
})