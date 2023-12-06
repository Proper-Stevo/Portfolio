import React from "react";

function Footer() {
    return (
        <section className="bg-black">
            <div className="max-w-screen-xl px-4 py-12 mx-auto font-serif space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <a href="#home" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            About
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#GitHub" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Projects
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#resume" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Resume
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#contactMe" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Contact
                        </a>
                    </div>
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="http://www.github.com/Proper-Stevo" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/stevenb1992/" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                        </svg>
                    </a>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2023 Dear Future Employer, Hire Me.
                </p>
            </div>
        </section>
    )
}

export default Footer; 