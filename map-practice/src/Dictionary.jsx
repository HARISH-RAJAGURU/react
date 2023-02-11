import React from "react";
import Entry from "./components/Entry";


function Dictionary (props)
{
    return(
        <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>
         {props.meaning}
        </dd>
      </div>

   
    )
}

export default Dictionary;