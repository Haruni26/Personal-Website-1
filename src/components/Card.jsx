import { useState } from "react";
import "./Card.css";

export const LINKS = {
  gmailLink: "mailto:aaron.seymour995@gmail.com",
  githubLink: "https://github.com/Haruni26",
  linkedinLink: "https://www.linkedin.com/in/aaron-ns/",
  spotifyLink:
    "https://open.spotify.com/playlist/700pJZoRIGYKNLY9Ff1rC7?si=d8166f84919b46b9",
};

function Card() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const gmailLink = () => {
    window.open(LINKS.gmailLink, "_blank");
  };

  const githubLink = () => {
    window.open(LINKS.githubLink, "_blank");
  };

  const linkedinLink = () => {
    window.open(LINKS.linkedinLink, "_blank");
  };

  const spotifyLink = () => {
    window.open(LINKS.spotifyLink, "_blank");
  };

  const topics = [
    {
      name: "About",
      descriptionAbout1:
        "Hi, My name is Aaron and I'm a Computer Science Major from The Bahamas currently studying at Saint Mary's University in Halifax, Nova Scotia. I'm interested in Full-Stack/Software development as I love designing and coding front-end for user experience, and also building the systems and platforms to ensure the information the user is getting is accurate, clear, and clean. Building this was my first project and I couldn't have enjoyed it more!",
      descriptionAbout2:
        "Currently I have experience with HTML, CSS, Python, Java, JavaScript, and JavaScript XML with React. I want to consolidate my knowledge with these languages however I am open to learn more languages and eager to learn C++. I definitely want to expand my knowledge and experience in artifical intelligence and always interested to grow as a developer",
    },
    {
      name: "Projects",
      descriptionProjects: "Working on it, including this site",
    },
    {
      name: "Contacts",
    },
    {
      name: "Blog",
      descriptionBlog: "Coming Soon.",
    },
  ];

  return (
    // Extra Card
    <div className={`card-container ${selectedTopic ? "shifted" : ""}`}>
      {selectedTopic && (
        <div className="extra-card">
          <h3 className="extra-title">{selectedTopic.name}</h3>

          {/* About Section */}
          {selectedTopic.name === "About" ? (
            <>
              <p className="extra-description">
                {selectedTopic.descriptionAbout1}
              </p>
              <div className="divider"></div>
              <p className="extra-description">
                {selectedTopic.descriptionAbout2}
              </p>
            </>
          ) : null}

          {/* Projects Section */}
          {selectedTopic.name === "Projects" && (
            <button
              onClick={() => window.open("https://github.com/Haruni26/Personal-Website-1", "_blank")}
              className="project-link"
            >
              Personal Website 1
              <p className="project-description">
                First project and attempt in making a personal website/portfolio
              </p>
            </button>
          )}

          {/* Contacts Section (Icons need fixing) */}
          {selectedTopic.name === "Contacts" ? (
            <>
              <button onClick={gmailLink} className="link-box">
                Gmail
              </button>
              <button onClick={githubLink} className="link-box">
                Github
              </button>

              <button onClick={linkedinLink} className="link-box">
                LinkedIn
              </button>
            </>
          ) : null}

          {/* Blog Section */}
          {selectedTopic.name === "Blog" ? (
            <>
              <p className="extra-description">
                {selectedTopic.descriptionBlog}
              </p>
            </>
          ) : null}

          <button
            className="close-button"
            onClick={() => setSelectedTopic(null)}
          >
            Close
          </button>
        </div>
      )}

      {/* Main Card */}
      <div className="card">
        <h2 className="card-title">Aaron Seymour</h2>
        <div className="button-container">
          {topics.map((topic) => (
            <button
              key={topic.name}
              className="card-button"
              onClick={() => setSelectedTopic(topic)}
            >
              {topic.name}
            </button>
          ))}
          <button onClick={spotifyLink} className="card-button">
            Playlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
