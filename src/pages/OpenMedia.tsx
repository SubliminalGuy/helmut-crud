import { useEffect, useState } from "react";
import { remult } from "remult";
import { Project } from "../shared/Project";

const projectRepo = remult.repo(Project);

export default function OpenMedia() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    projectRepo.find().then(setProjects);
  }, []);

  return (
    <div>
      <main>
        <div className="project-names">
          <p className="project-info-big">Cosmo ProjektId</p>
          <p className="project-info-big">Cosmo Projektname</p>
          <p className="project-info-big">OM ID</p>
          <p className="project-info-big">OM Name</p>
          <p className="project-info-big">OM Redaktion</p>
          <p className="project-info-big">OM Planungsdatum</p>
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
              <div className="project-info">
                <p className="additional-info">Cosmo Projekt Id</p>
                <p>{task.projektId}</p>
              </div>
              <div className="project-info">
                <p className="additional-info">Cosmo Projekt Name</p>
                <p>{task.projektName}</p>
              </div>
              <div className="project-info">
                <p className="additional-info">OM ID</p>
                <p>{task.openMediaId}</p>
              </div>
              <div className="project-info">
                <p className="additional-info">OM Name</p>
                <p>{task.openMediaThema}</p>
              </div>
              <div className="project-info">
                <p className="additional-info">OM Redaktion</p>
                <p>{task.openMediaRed}</p>
              </div>
              <div className="project-info">
                <p className="additional-info">OM Planungsdatum</p>
                <p>{datum}</p>
              </div>
            </div>
          );
        })}
        <div className="list-container">
          <label className="pLabel">Projektauswahl:</label>

          <select className="list-item" name="projekte" id="projekte">
            {projects.map((task) => {
              return (
                <option value={task.projektName}>{task.projektName}</option>
              );
            })}
          </select>
        </div>
      </main>
    </div>
  );
}
