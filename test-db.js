const mongoose = require('mongoose');

const uri = "mongodb+srv://adanrahman4321_db_user:2ED8R6uFk3C4JVLO@cluster0.xf2bmfh.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => {
    console.log("Connected successfully!");
    process.exit(0);
  })
  .catch(err => {
    console.error("Error:", err);
    process.exit(1);
  });
