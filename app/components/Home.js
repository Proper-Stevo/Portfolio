import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCodeBranch, faClipboard, faPaperPlane } from "@fortawesome/free-solid-svg-icons"


function Home() {
  return (
    <div className="backgroundOne">
      <nav className="flex sm:justify-left p-2">
        <ul className="p-2">
          <li className="">
            <a href="#home">
              <FontAwesomeIcon icon={faHouse} size="2xl" />
            </a>
          </li>
          <br />
          <li>
            <a href="#GitHub">
              <FontAwesomeIcon icon={faCodeBranch} size="2xl" />
            </a>
          </li>
          <br />
          <li>
            <a href="#resume">
              <FontAwesomeIcon icon={faClipboard} size="2xl" />
            </a>
          </li>
          <br />
          <li>
            <a href="#contactMe">
              <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
            </a>
          </li>
        </ul>
      </nav>
      <div className='bg-gray-500 bg-opacity-40 font-serif flex items-center text-center text-xl uppercase p-4 sm:text-5xl m:text-3xl sm:pt-10 pb-8' id='home'>
        <span className='img-txt m-auto sm:text-l'><h1>Welcome To Steven's Page!</h1>
          <hr /> A Los Angeles based Full Stack Developer. <br />
          <br />
          <a className='pr-5' href="https://drive.google.com/uc?export=download&id=1cuRIIr2uHdziiqqIMRjT_HAOHAe6wgzP">
            Resume
          </a>
          <a className='pl-5' href="#contactMe">
            Contact
          </a>
        </span>
      </div>
    </div>
  )
};

export default Home

