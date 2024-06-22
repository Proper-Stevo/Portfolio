import React from "react";
import projectsData from "../data/jobData.json"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./Cards"


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
            <div className="min-h-screen flex items-center font-serif justify-center">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap -mx-2 justify-center">
                            {projectsInfo.map((project, index) => {
                                return (
                                    <div key={index} className="w-full text-black sm:w-1/2 lg:w-1/3 px-2 mb-4">
                                        <Card className="text-center h-full bg-gray-300 bg-opacity-40 shadow-lg flex flex-col justify-between mt-16 lg:mt-1">
                                            <CardHeader>
                                                <DisplayProject project={project.title} />
                                                <CardTitle className="text-xl font-bold hover:text-white">{project.title}</CardTitle>
                                                <CardDescription>{project.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="px-3 mt-4 mb-2 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
                                                    <p className="mb-2 sm:mb-0 hover:text-white">
                                                        <a href={project.demo} className="underline font-bold flex flex-col items-center justify-center">
                                                            <img src="./images/urlBadge.png" alt="names" className="mb-1" />
                                                            <span className="mt-1 sm:mt-0">Website</span>
                                                        </a>
                                                    </p>
                                                    <p className="hover:text-white">
                                                        <a href={project.github} className="underline font-bold flex flex-col items-center justify-center">
                                                            <img src="./images/gbBadge.png" alt="github tags" className="mb-1" />
                                                            <span className="mt-1 sm:mt-0">Github</span>
                                                        </a>
                                                    </p>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;

