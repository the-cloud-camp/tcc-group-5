const mongoose = require('mongoose');

async function connect() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
    console.log('DB connect');
  } catch (error) {
    console.error('Error connecting to mongodb');
    console.error(error);
  }
}

module.exports = { connect };
