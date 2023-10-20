import * as Select from "@radix-ui/react-select";
import { useLoaderData } from "react-router-dom";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { remult } from "remult";
import { useState } from "react";

import { ProTools } from "../shared/ProTools";

const proToolsRepo = remult.repo(ProTools);

export function loader() {
  return proToolsRepo.find();
}

import nativeToast from "native-toast";
import "../select-style.css";
import "../native-toast.css";

export default function ProToolsCheckin() {
  /* Type Declaration für die Projektdaten aus der Datenbank
   */
  const helmutProjects = useLoaderData() as {
    projectname: string;
    projectId: string;
    jobId: string;
    mxfPath: string;
    autor: string;
    createdDate: Date;
  }[];

  /* React State Management für die Select-Elemente
   */
  const [projectData, setProjectData] = useState({
    projectName: "",
    audioSpur1: "",
    audioSpur2: "",
  });

  const selectElements = helmutProjects.map((project) => {
    return (
      <Select.Item
        className="SelectItem"
        key={project.jobId}
        value={project.projectname}
      >
        {project.projectname}
      </Select.Item>
    );
  });

  /* Ändert die Werte in projectData, wenn ein Select-Element verändert wird
   *  @param type: string - der Typ des Select-Elements, z.B. projectName
   *  @param value: string - der Wert des Select-Elements, z.B. Schiesserei in Neukölln
   */
  const handleValueChange = (type: string, value: string) => {
    setProjectData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const buttonHandler = () => {
    console.log(projectData);
    nativeToast({
      message: "Der Job wird an das Helmut-Interface übergeben ...",
      position: "south-east",
      // Self destroy in 5 seconds
      timeout: 5000,
      type: "info",
    });
    setTimeout(() => {
      location.reload();
    }, 1000 * 5);
  };

  return (
    <div className="headline-container">
      <h1 className="headline-container-h1">CheckIn ProTools</h1>
      <Select.Root
        onValueChange={(name: string) => handleValueChange("projectName", name)}
      >
        <Select.Trigger className="SelectTrigger" aria-label="Food">
          <Select.Value placeholder="Projekt auswählen">
            {projectData.projectName}
          </Select.Value>
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className="SelectContent"
            position="popper"
            side={window.innerWidth > 800 ? "right" : "bottom"}
            align={window.innerWidth > 800 ? "start" : "center"}
            sideOffset={window.innerWidth > 800 ? 40 : 0}
          >
            <Select.ScrollUpButton className="SelectScrollButton">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="SelectViewport">
              <Select.Group>
                <Select.Label className="SelectLabel">Projects</Select.Label>
                {selectElements}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      <Select.Root
        onValueChange={(name: string) => handleValueChange("audioSpur1", name)}
      >
        <Select.Trigger className="SelectTrigger" aria-label="Food">
          <Select.Value placeholder="Audiospur 1+2">
            {projectData.audioSpur1}
          </Select.Value>
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className="SelectContent"
            position="popper"
            side={window.innerWidth > 800 ? "right" : "bottom"}
            align="center"
            sideOffset={window.innerWidth > 800 ? 40 : 0}
          >
            <Select.ScrollUpButton className="SelectScrollButton">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="SelectViewport">
              <Select.Group>
                <Select.Label className="SelectLabel">
                  Audiospur 1+2
                </Select.Label>
                <Select.Item className="SelectItem" value="schiesserei mix sf">
                  schiesserei mix sf
                </Select.Item>
                <Select.Item className="SelectItem" value="autobahn mix sf">
                  autobahn mix sf
                </Select.Item>
                <Select.Item className="SelectItem" value="fahrrad sf">
                  fahrrad sf
                </Select.Item>
                <Select.Item className="SelectItem" value="landtag sf">
                  landtag sf
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      <Select.Root
        onValueChange={(name: string) => handleValueChange("audioSpur2", name)}
      >
        <Select.Trigger className="SelectTrigger" aria-label="Food">
          <Select.Value placeholder="Audiospur 3+4">
            {projectData.audioSpur2}
          </Select.Value>
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className="SelectContent"
            position="popper"
            side={window.innerWidth > 800 ? "right" : "bottom"}
            align={window.innerWidth > 800 ? "end" : "center"}
            sideOffset={window.innerWidth > 800 ? 40 : 0}
          >
            <Select.ScrollUpButton className="SelectScrollButton">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="SelectViewport">
              <Select.Group>
                <Select.Label className="SelectLabel">
                  Audiospur 3+4
                </Select.Label>
                <Select.Item className="SelectItem" value="schiesserei mix it">
                  schiesserei mix it
                </Select.Item>
                <Select.Item className="SelectItem" value="autobahn mix it">
                  autobahn mix it
                </Select.Item>
                <Select.Item className="SelectItem" value="fahrrad IT">
                  fahrrad IT
                </Select.Item>
                <Select.Item className="SelectItem" value="landtag M&E">
                  landtag M&E
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      <button disabled className="Button" onClick={buttonHandler}>
        Einchecken
      </button>
    </div>
  );
}
