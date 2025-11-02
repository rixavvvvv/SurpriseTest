const mongoose = require("mongoose");
const { configDotenv } = require("dotenv");

const Db_url = process.env.db_url;


module.exports.setupDatabase = async (Db_url) => {
    await mongoose.connect(Db_url);

};

