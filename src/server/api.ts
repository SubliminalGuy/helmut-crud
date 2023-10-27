import { remultExpress } from "remult/remult-express";
import { createKnexDataProvider } from "remult/remult-knex";
import { Project } from "../shared/Project";
import { Hostname } from "../shared/Hostname";
import { AiMetadata } from "../shared/AiMetadata";
import { ProTools } from "../shared/ProTools";

require("dotenv").config();

export const api = remultExpress({
  entities: [Project, Hostname, AiMetadata, ProTools],
  dataProvider: createKnexDataProvider({
    client: "mssql",
    connection: {
      server: process.env.SERVER,
      database: process.env.DATABASE,
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      options: {
        enableArithAbort: true,
        encrypt: true,
      },
    },
  }),
});
