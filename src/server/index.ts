import express from "express";
import { api } from "./api";
import { getAudioFiles } from "./fileService";
import { remult } from "remult"
import { ProTools } from "../shared/ProTools";

const app = express();
app.use(api);

/* Route to get  files form the file system recursively
 */
app.get("/api/files", async (req, res) => {
  getAudioFiles().then((queryResult) => res.json(queryResult));
  res.end;
});

/* Route to prepare the helmut checkin
 */
app.post("/api/checkin", api.withRemult, async (req, res) => {

  const proTools = remult.repo(ProTools)
  try {
    const data = await proTools.find({where: {projectname: req.body.projectData.projectName}})
    const projektId = data[0].projectId
    res.json({message: projektId, success: true})
  }
  catch {
    res.json({ message: req.body.projectData.projectName, success: false})
  }
 

});

app.listen(3002, () => console.log("Server started at port 3002"));
