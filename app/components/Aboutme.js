import React from "react";

function About() {
    return (
        <>
        <div className="aboutMe bg-gray-500">
            <div class='flex items-center justify-center pt-20 text-black'>
            <img className="flex rounded-full" style={{height:"20rem"}} src="./images/selfie.jpeg"/>
                <div class='w-full max-w-lg px-10 py-8 mx-auto bg-transparent rounded-lg shadow-xl'>
                    <h1 class="text-xl mb-10 text-center text-white text-3xl">About Me</h1>

                    <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
                        <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">Education</summary>
                        <p class="px-4 py-3">
                            UCLA Extension: Full Stack Developer Program.
                            Fluent in numerous languages and frameworks including (but not limited to): HTML, Node.Js, CSS, JavaScript,
                            React, and many more. Passionate, motivated and well-versed developer available and open for inquiries.
                        </p>
                    </details>

                    <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
                        <summary class="w-full bg-white text-dark flex justify-between px-4 py-3 after:content-['+']">About Me</summary>
                        <p class="px-4 py-3">
                            Steven Barrios here! I love programming, writing, speaking, learning, traveling and food. I do spend most of my free
                            time with my dog or learning about new techologies. Aside from visiting cournties and experiencing new foods and cultures,
                            I enjoy nature and scenic views with a good cup of coffee. Los Angeles Native.
                        </p>
                    </details>

                    <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
                        <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">
                            My Goals
                        </summary>
                        <p class="px-4 py-3">
                            As an aspiring new developer I want to accomplish many things in life. I want a great career with a company that cares about its
                            employees and has good values. I want to help push the developer world into new heights, improve my skills constantly, network as
                            much as I can and help out in my community as much as possible.
                        </p>
                    </details>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;