const mongoose = require('mongoose');

function connect() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
  })
  .then(() => console.log('MongoDB connecting Success!!'))
  .catch((e) => console.log(e));

  mongoose.connection.on('disconnected', connect);
}

module.exports = () => connect();
