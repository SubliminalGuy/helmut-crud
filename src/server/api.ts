import { remultExpress } from "remult/remult-express";
import { Project } from "../shared/Project";

export const api = remultExpress({ entities: [Project] });
