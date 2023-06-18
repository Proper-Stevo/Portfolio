import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCodeBranch, faClipboard, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

function Home() {
    return (
        <div className="backgroundOne">
        <div className="flex justify-center ">
          <div className="ml-6 flex w-10 space-y-10">
              <ul>
                <li className="p-5">
                  <FontAwesomeIcon icon={faHouse} className="h-2"/>
                </li>
                <li className="p-5">
                  <FontAwesomeIcon icon={faCodeBranch} />
                </li>
                <li className="p-5">
                <FontAwesomeIcon icon={faClipboard} />
                </li>
                <li className="p-5">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
};

export default Home

