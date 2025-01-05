import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log(
      "MonogDB COnnected : ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;
