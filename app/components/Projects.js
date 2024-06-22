import React from "react";
import projectsData from "../data/jobData.json"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./Card"


function Projects() {

    const { projectsInfo } = projectsData;
    function DisplayProject(project) {
        const eachProject = Object.values(project);
        const thisProject = eachProject[0];

        let imageSrc, imageAlt, imageKey;

        switch (thisProject) {
            case "South Central With Love":
                imageSrc = "./images/resSS.png"
                imageAlt = "Restaurant Project";
                imageKey = "Restaurant";
                break;
            case "KARRASS":
                imageSrc = "./images/karrass.png";;
                imageAlt = "Pokemon Project";
                imageKey = "pokemon";
                break;
            case "Orbital Odyssey":
                imageSrc = "./images/spaceSS.png";
                imageAlt = "Orbital Odyssey Project";
                imageKey = "space";
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
                <div className="min-h-screen flex items-center justify-center ">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center -mx-2">
                            {projectsInfo.map((project, index) => (
                                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4 flex justify-center lg:text-gray-700  sm:text-white">
                                    <div className="bg-gray-400 bg-opacity-40 rounded-lg shadow-lg w-full">
                                        <div className="text-center px-6 py-4">
                                            <DisplayProject project={project.title} />
                                            <h2 className="text-xl font-bold mb-2 hover:text-white">{project.title}</h2>
                                            <p className="">{project.description}</p>
                                        </div>
                                        <div className="flex justify-center py-2 ">
                                            <a href={project.demo} className="underline font-bold flex items-center mr-4 hover:text-white">
                                                <img src="./images/urlBadge.png" alt="Website Icon" className="" />
                                                <span>Website</span>
                                            </a>
                                            <a href={project.github} className="underline font-bold flex items-center hover:text-white">
                                                <img src="./images/gbBadge.png" alt="Github Icon" className="" />
                                                <span>Github</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>





            </div>
        </>
    )
}

export default Projects;

