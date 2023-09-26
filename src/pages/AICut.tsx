import { useEffect, useState } from "react";
import { remult } from "remult";
import { AiMetadata } from "../shared/AiMetadata";

const aiMetadataRepo = remult.repo(AiMetadata);

export default function AICut() {
  const [aiProjects, setAiProjects] = useState<AiMetadata[]>([]);

  useEffect(() => {
    aiMetadataRepo.find().then(setAiProjects);
  }, []);

  const shortenText = (text: string) => {
    if (text.length > 100) {
      text = text.substring(0, 99) + "...";
    }
    return text;
  };

  const shortenPath = (text: string) => {
    let textArray = text.split("/");
    text = textArray.slice(-4, textArray.length).join("/");
    return text;
  };

  return (
    <div>
      <main>
        <div className="project-names">
          <p className="project-info-big">Jobname</p>
          <p className="project-info-big">Sprechertext</p>
          <p className="project-info-big">Sprache</p>
          <p className="project-info-big">Stimme</p>
          <p className="project-info-big">Projektpfad</p>
          <p className="project-info-big">Creation Date</p>
        </div>

        {aiProjects
          .sort((a, b) => b.createdDate - a.createdDate)
          .map((proj) => {
            let datum = "kein Datum";
            if (proj.createdDate) {
              const dateObj = proj.createdDate;
              let month = dateObj.getUTCMonth() + 1;
              let day = dateObj.getUTCDate();
              let year = dateObj.getUTCFullYear();

              datum = day + "." + month + "." + year;
            }

            return (
              <div className="project-element" key={proj.jobName}>
                <div className="project-info">
                  <p className="additional-info">Jobname</p>
                  <p className="project-paragraph">{proj.jobName}</p>
                </div>
                <div className="project-info">
                  <p className="additional-info">Sprechertext</p>
                  <p className="project-paragraph">
                    {shortenText(proj.sprechertext)}
                  </p>
                </div>
                <div className="project-info">
                  <p className="additional-info">Sprache</p>
                  <p className="project-paragraph">{proj.sprache}</p>
                </div>
                <div className="project-info">
                  <p className="additional-info">Stimme</p>
                  <p className="project-paragraph">{proj.stimme}</p>
                </div>
                <div className="project-info">
                  <p className="additional-info">Projektpfad</p>
                  <p className="project-paragraph">
                    {shortenPath(proj.projektpfad)}
                  </p>
                </div>
                <div className="project-info">
                  <p className="additional-info">Creation Date</p>
                  <p className="project-paragraph">{datum}</p>
                </div>
              </div>
            );
          })}
      </main>
    </div>
  );
}
