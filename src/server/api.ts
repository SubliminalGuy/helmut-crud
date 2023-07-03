import { remultExpress } from "remult/remult-express";
import { createKnexDataProvider } from "remult/remult-knex";
import { Project } from "../shared/Project";
import { Hostname } from "../shared/Hostname";

require("dotenv").config();

export const api = remultExpress({
  entities: [Project, Hostname],
  dataProvider: createKnexDataProvider({
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3306,
      database: "test",
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  }),
});
