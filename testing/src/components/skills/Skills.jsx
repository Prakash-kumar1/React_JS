import React from 'react'

function Skills({skills}) {
// let  skills = ["HTML","CSS","JavaScript","Bootstrap","React-JS"]
  return (
    <div>
        <ul>

            {/* {skills ? skills.map((skill) => <li key={skill}>{skill}</li>) : null} */}

{/* We can also use =>  "Optional Chaining" */}

{skills ?.map((skill) => <li key={skill}> I Known {skill} </li>)}

        </ul>
    </div>
  )
}

export default Skills