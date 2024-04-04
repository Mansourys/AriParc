import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <span><center>{name}</center></span>
          <h1><center>{title}</center></h1>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}

export default Back
