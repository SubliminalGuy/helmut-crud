import { useEffect, useState } from "react";
import { remult } from "remult";
import { Hostname } from "../shared/Hostname";

const hostnameRepo = remult.repo(Hostname);

export default function Servername() {
  const [hostnames, setHostnames] = useState<Hostname[]>([]);

  useEffect(() => {
    hostnameRepo.find().then(setHostnames);
  }, []);

  return (
    <div>
      <main>
        <div className="project-names">
          <p className="project-info-big">Username</p>
          <p className="project-info-big">Rechnername</p>
        </div>
        {hostnames.map((task) => {
          return (
            <div className="project-element" key={task.hostname}>
              <div className="project-info">
                <p className="additional-info">Hostname</p>
                <p className="project-paragraph">{task.hostname}</p>
              </div>
              <div className="project-info">
                <p className="additional-info">Rechnernummer</p>
                <p className="project-paragraph">{task.rechnernummer}</p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
