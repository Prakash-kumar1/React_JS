import React from 'react'

function Skills() {
// let  skills = ["HTML","CSS","JavaScript","Bootstrap","React-JS"]
  return (
    <div>
        <ul>
            {skills ? skills.map((skill) => <li key={skill}>{skill}</li>) : null}
        </ul>
    </div>
  )
}

export default Skills