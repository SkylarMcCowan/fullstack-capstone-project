require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance;
    }

    const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        // Task 1: Connect to MongoDB
        await client.connect();

        // Task 2: Connect to database giftDB and store in variable dbInstance
        dbInstance = client.db(dbName);

        // Log the connection success
        console.log(`Successfully connected to database: ${dbName}`);

        // Task 3: Return the database instance
        return dbInstance;
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1);  // Exit the process if connection fails
    }
}

module.exports = connectToDatabase;