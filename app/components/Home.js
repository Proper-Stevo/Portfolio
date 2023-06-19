import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCodeBranch, faClipboard, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import About from "./Aboutme"

function Home() {
  return (
    <div className="backgroundOne">
      <nav className="flex sm:justify-left p-2">
        <ul className="p-2">
          <li className="">
            <button>
          <FontAwesomeIcon icon={faHouse} size="2xl" href="#home"/> 
          </button>
          </li>
          <br />
          <li className="">
            <button>
          <FontAwesomeIcon icon={faCodeBranch} size="2xl" href="#GitHub"/>
          </button>
          </li>
          <br />
          <li>
            <button>
          <FontAwesomeIcon icon={faClipboard} size="2xl" href="#resume"/>
          </button>
          </li>
          <br />
          <li>
            <button>
          <FontAwesomeIcon icon={faPaperPlane} size="2xl" href="#contactMe"/>
          </button>
          </li>
        </ul>
      </nav>
      <div className='contentOne flex min-h-screen items-center text-center text-5xl' id='home'>
            <span className='img-txt m-auto'><h1>Welcome To Steven's Page!</h1>
                <hr /> A Los Angeles based Full Stack Developer. <br />
                <br />
                <button className='pr-5' href="https://drive.google.com/uc?export=download&id=1iV5j5P_et0GTuy0DrwxBGn44veV339_i">
                    Resume
                </button>
                <button className='pl-5' href="#contact">
                    Contact
                </button>
            </span>
        </div>
    </div>
  )
};

export default Home

