import React from 'react'
import SingleProject from './SingleProject'

const Projects = ({data}) => {

  return (
    <div style={{display:"grid",gridTemplateColumns: "repeat(2,1fr)",gap:"20px", width : "100%"}}>
        {data.map((p)=><SingleProject key={p.id} reponame={p.name}starc={p.stargazers_count}forkc={p.forks_count}lan={p.language} link={p.clone_url}/>)}

    </div>
  )
}

export default Projects