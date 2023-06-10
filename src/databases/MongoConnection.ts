import mongoose from "mongoose";
require('dotenv').config()

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      if (!process.env.CONNECTIONSTRING) {
        throw new Error("A string de conexão não está definida nas variáveis de ambiente.");
      }

      await mongoose.connect(process.env.CONNECTIONSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Banco Conectado")
    } catch (err) {
      console.log(err.message);
      process.exit(1);
    }
  }
}