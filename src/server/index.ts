import express from "express";
import { api } from "./api";
import { getAudioFiles } from "./fileService";
import { remult } from "remult"
import { ProTools } from "../shared/ProTools";
import dummyjson from "../../dummy-helmut-body.json"
import  fs  from "fs";
require("dotenv").config();

const proToolsMountPath = process.env.PROTOOLS_MOUNT
const proToolsRealPath = ""

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
  const originalResObject = res
  const proTools = remult.repo(ProTools)
  let audioTrack1 = req.body.projectData.audioSpur1
  let audioTrack2 = req.body.projectData.audioSpur2
  audioTrack1 = audioTrack1.replace(proToolsMountPath, proToolsRealPath)
  audioTrack2 = audioTrack2.replace(proToolsMountPath, proToolsRealPath)
  
  try {
    const data = await proTools.find({where: {projectname: req.body.projectData.projectName}})
    
    const projektData = data[0]
    const payload = { ...dummyjson };
    const newMetadata = [];
    for (const object of payload.metadata) {
        switch (object.name) {
            case 'PT Projectname':
                object.value = projektData.projectname;
                break;
            case 'PT ProjectID':
                object.value = projektData.projectId;
                break;
            case 'PT JobID':
                object.value = projektData.jobId;
                break;
            case 'PT MXF':
                object.value = projektData.mxfPath;
                break;
            case 'PT Autor':
                object.value = projektData.autor;
                break;
            case 'PT AudioST':
                object.value = audioTrack1;
                break;
            case 'PT AudioIT':
                // condition to handle possibility of empty audio track
                object.value = (audioTrack1 === '') ? '' : audioTrack2;
                break;
        }
        newMetadata.push(object);
      }
      payload.metadata = newMetadata;
      //console.log(payload.metadata)
      
        const projektId = projektData.projectId
        /*  
        fs.writeFile("payload.json", JSON.stringify(payload), (err ) => {
          if (err) {
            throw err;
            console.log(err)
          }
        })
        */
/* The following is disabling certificat verification as should only be used
* in a staging environment!
*/
 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        
fetch("https://sp-hlmkcore01.rbb-online.de/v1/io/jobs", {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.HELMUT_BEARER_TOKEN}`
  },
  body: JSON.stringify(payload),
}).then((res) => {
  const json = res.json();
  if (!res.ok) {
      console.error('There has been a problem with your fetch operation - Response Status:', res.status)
      originalResObject.json({message: "Das Backend konnte den Helmut Server nicht erreichen. Bitte den Support informieren.", success: true})
  }
  else {
      console.log('Request to Helmut succesful - Status: ', res.status)
      originalResObject.json({message: projektId, success: true})
  }
})
    
  
  }
  catch {
    res.json({ message: req.body.projectData.projectName, success: false})
  }


});

app.listen(3002, () => console.log("Server started at port 3002"));
