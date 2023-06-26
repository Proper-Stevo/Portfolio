"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCoffee, faHiking, faSoccerBall, faLaptopCode, faPlaneDeparture, faCalendar,
    faMapPin, faGraduationCap
} from "@fortawesome/free-solid-svg-icons"

function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border rounded mb-2">
            <button
                className="w-full text-left p-2 font-medium bg-gray-400"
                onClick={toggleAccordion}
            >
                {title}
            </button>
            {isOpen && <div className="p-2">{children}</div>}
        </div>
    );
}

function Accordion() {
    return (
        <div className="w-full">
            <AccordionItem title="Education">
                <p>
                    UCLA Extension: Full Stack Developer Program. Fluent in numerous languages and frameworks including (but not limited to): HTML, Node.Js, CSS, JavaScript,
                    React, and many more. Passionate, motivated and well-versed developer available and open for inquiries.
                </p>
                <p className="pb-2">
                    You can also download my Resume using this button. </p>
                <a
                    href="https://drive.google.com/uc?export=download&id=1iV5j5P_et0GTuy0DrwxBGn44veV339_i"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Download
                </a>

            </AccordionItem>
            <AccordionItem title="About Me">
                <p>
                    Steven Barrios here! I love programming, writing, speaking, learning, traveling and food. I do spend most of my free time with my dog or learning about new techologies.
                    Aside from visiting cournties and experiencing new foods and cultures, I enjoy nature and scenic views with a good cup of coffee.
                </p>
                <hr />
                <div className="flex justify-center">
                    <div className="w-1/2">
                        Los Angeles, CA <FontAwesomeIcon icon={faMapPin} />
                        <br />
                        31 Years Old <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div className="w-1/2">
                        UCLA <FontAwesomeIcon icon={faGraduationCap} />
                        <br />
                        My Interest
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faHiking} />
                        <FontAwesomeIcon icon={faLaptopCode} />
                        <FontAwesomeIcon icon={faPlaneDeparture} />
                        <FontAwesomeIcon icon={faSoccerBall} />

                    </div>
                </div>
            </AccordionItem>
            <AccordionItem title="My Goals">
                <p>
                    As an aspiring new developer I want to accomplish many things in life. I want a great career with a company that cares about its employees and has good values.
                    I want to help push the developer world into new heights, improve my skills constantly, network as much as I can and help out in my community as much as possible.
                </p>
            </AccordionItem>
        </div>
    );
}

function About() {
    return (
        <div className="text-box bg-gray-600 py-10 sm:justify-items-center" id="aboutMe">
            <div className="text-center pt-3">
                <p className="text-center text-xl sm:text-5xl m:text-3xl">About Steven Barrios</p>
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center pt-6 pb-6">
                <img src="./images/professionalPhoto.jpg" className="flex rounded-full h-64 pb-6 pl-3 pr-3" id="selfie" alt="selfie" />
                <Accordion />
            </div>
        </div>

    );
}

export default About;

