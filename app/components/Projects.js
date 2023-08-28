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
                imageSrc = "./images/spaceSS.png";
                imageAlt = "Orbital Odyssey Project";
                imageKey = "space";
                break;
            case "Pokemon Search":
                imageSrc = "./images/pokemonSS.png";;
                imageAlt = "Pokemon Project";
                imageKey = "pokemon";
                break;
            default:
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
                <div className="flex justify-evenly font-serif items-center h-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-40 justify-evenly pt-40 pl-1">
                        {projectsInfo.map((project, index) => {
                            return (
                                <div key={index}>
                                    <div className="max-w-xs bg-gray-200 bg-opacity-40 rounded overflow-hidden shadow-lg">
                                        <DisplayProject project={project.title} />
                                        <div className="px-6 py-4">
                                            <h5 className="font-bold text-xl mb-2">{project.title}</h5>
                                            <p className="text-white text-base">{project.description}</p>
                                            <div className="px-6 pt-4 pb-2 flex justify-evenly">
                                                <div className="mr-5">
                                                    <a href={project.demo} className="underline font-bold">
                                                        <img src="./images/urlBadge.png" alt="names" />
                                                        <p>Website</p>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href={project.github} className="underline font-bold">
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
            </div>
        </>
    )
}

export default Projects;