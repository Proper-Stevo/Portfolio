"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCoffee, faHiking, faSoccerBall, faLaptopCode, faPlaneDeparture, faCalendar,
    faMapPin, faGraduationCap
} from "@fortawesome/free-solid-svg-icons"


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./Accordion"

function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Education</AccordionTrigger>
                <AccordionContent>
                    UCLA Extension: Full Stack Developer Program. Fluent in numerous languages and frameworks including (but not limited to): HTML, Node.Js, CSS, JavaScript, React, and many more. Passionate, motivated and well-versed developer available and open for inquiries.
                    You can also download my Resume using this button.
                    <a href="https://drive.google.com/uc?export=download&id=1tiyf-wtxV3gH1Fq5BNP11bVZmw2Y7qEC">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Download
                        </button>
                    </a>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>About Me</AccordionTrigger>
                <AccordionContent>
                I'm Steven Barrios. Programming, writing, speaking, learning, traveling, and food are passions of mine. During my leisure time, I cherish moments with my dog and delve into the latest technologies. Exploring countries, sampling diverse cuisines, and immersing myself in different cultures captivate me. I find solace in nature's beauty and scenic vistas, often accompanied by a satisfying cup of coffee. 
                  <hr />
                    <br />
                    <div className="flex justify-evenly">
                        <div className="w-1/2">
                            Los Angeles, CA <FontAwesomeIcon icon={faMapPin} />
                            &nbsp; 32 Years Old <FontAwesomeIcon icon={faCalendar} />
                            <br />
                        </div>
                        <div className="w-1/2">
                            UCLA <FontAwesomeIcon icon={faGraduationCap} />
                            &nbsp; My Interests&nbsp;
                            <FontAwesomeIcon icon={faCoffee} />&nbsp;
                            <FontAwesomeIcon icon={faHiking} />&nbsp;
                            <FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;
                            <FontAwesomeIcon icon={faSoccerBall} />
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>My Goals</AccordionTrigger>
                <AccordionContent>
                As a mid-level developer with a hunger to learn more, I aspire to achieve many things in life. I seek a great career with a company that values its employees and upholds strong values. I am eager to push the developer world to new heights, constantly improve my skills, network extensively, and contribute to my community as much as possible. While I have a few accomplishments under my belt, I am ready to elevate my developer skills to the next level.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}



function About() {
    return (
        <div className="text-box py-10 sm:justify-items-center font-serif bg-slate-500 bg-opacity-90" id="aboutMe">
            <div className="text-center pt-3">
                <p className="text-center text-xl sm:text-5xl m:text-3xl">About Steven Barrios</p>
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center pt-6 pb-6">
                <img src="./images/professionalPhoto.JPG" className="flex rounded-full h-64 pb-6 pl-3 pr-3" id="selfie" alt="selfie" />
                <AccordionDemo />
            </div>
        </div>

    );
}

export default About;

