import { useEffect, useState } from "react";
import { remult } from "remult";
import { Project } from "./shared/Project";

const projectRepo = remult.repo(Project);

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [list, setList] = useState<string>("");

  useEffect(() => {
    projectRepo.find().then(setProjects);
    projectRepo
      .find()
      .then((el) => el.reduce((acc, el) => (acc += el.projektName + ","), ""))
      .then(setList);
  }, []);
  return (
    <div>
      <h1>Open Media Projects</h1>
      <main>
        <div className="project-names">
          <p className="project-info">Cosmo Projekt Id</p>
          <p className="project-info">Cosmo Projekt Name</p>
          <p className="project-info">OM ID</p>
          <p className="project-info">OM Name</p>
          <p className="project-info">OM Redaktion</p>
          <p className="project-info">OM Planungsdatum</p>
        </div>
        {projects.map((task) => {
          let datum = "kein Datum";
          if (task.openMediaPlanungsdatum) {
            const dateObj = task.openMediaPlanungsdatum;
            let month = dateObj.getUTCMonth() + 1;
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();

            datum = day + "." + month + "." + year;
          }

          return (
            <div className="project-element" key={task.projektId}>
              <p className="project-info">{task.projektId}</p>
              <p className="project-info">{task.projektName}</p>
              <p className="project-info">{task.openMediaId}</p>
              <p className="project-info">{task.openMediaThema}</p>
              <p className="project-info">{task.openMediaRed}</p>
              <p className="project-info">{datum}</p>
            </div>
          );
        })}
        <div className="list-container">
          <p className="list-item">Liste der Projekte: {list}</p>
        </div>
      </main>
    </div>
  );
}
