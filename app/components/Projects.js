import React from "react";
import projectsData from "../data/jobData.json"


function Projects() {

    const { projectsInfo } = projectsData;
    function DisplayProject(project) {
        const eachProject = Object.values(project);
        const thisProject = eachProject[0];

        let imageSrc, imageAlt, imageKey;

        switch (thisProject) {
            case "South Central With Love":
                imageSrc = "./images/resSS.png"
                imageAlt = "National Park Project";
                imageKey = "pines";
                break;
            case "Orbital Odyssey":
                imageSrc = "./images/SpaceSS.png";
                imageAlt = "Orbital Odyssey Project";
                imageKey = "space";
                break;
            case "Pokemon Search":
                imageSrc = "./images/pokemonSS.png";;
                imageAlt = "Pokemon Project";
                imageKey = "pokemon";
                break;
            default:
                // Handle default case if needed
                break;
        }

        return (
            <img
                className="project-img"
                src={imageSrc}
                alt={imageAlt}
                key={imageKey}
            />
        );
    }


    return (
        <>
            <div className="background2" id="GitHub">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center pt-40 pl-1">
                    {projectsInfo.map((project, index) => {
                        return (
                            <div key={index}>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg" id="theCards">
                                    <DisplayProject project={project.title} />
                                    <div className="px-6 py-4">
                                        <h5 className="font-bold text-xl mb-2">{project.title}</h5>
                                        <p className="text-white text-base">{project.description}</p>
                                        <div className="px-6 pt-4 pb-2 flex justify-evenly">
                                            <div className="mr-4">
                                                <a href={project.demo} className="underline">
                                                    <img src="./images/urlBadge.png" alt="names" />
                                                    <p>Website</p>
                                                </a>
                                            </div>
                                            <div>
                                                <a href={project.github} className="underline">
                                                    <img src="./images/gbBadge.png" alt="github tags" />
                                                    <p>Github</p>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Projects;