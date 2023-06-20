import { remultExpress } from "remult/remult-express";
import { Project } from "../shared/Project";
import { Hostname } from "../shared/Hostname";

export const api = remultExpress({ entities: [Project, Hostname] });
