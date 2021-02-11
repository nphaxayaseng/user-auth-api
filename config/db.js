const { mongoose } = require("mongoose");

const DB_URL = 'mongo "mongodb+srv://dbuser:dbuser@cluster0.plki0.mongodb.net/users?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnidiedTopology: true})

mongoose.connect.once('open', () => console.log(`Connected to mongo DB at ${DB_URL}!`))

