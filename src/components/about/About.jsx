import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/ab2.jpg"
import "./about.css"
import { useState } from "react"
import { useRef } from "react"

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
      if (isPlaying) {
          videoRef.current.pause();
      } else {
          videoRef.current.play();
      }
      setIsPlaying(prevState => !prevState);
  };
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='containerr flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='ARIZONA PARC' />

            <p>La société "Arizona Immobilier" est le fruit de l'ambition et de la dynamique de trois jeunes entrepreneurs : Sofiane, Ahmed et Ibrahim. "Arizona Immobilier" se distingue par son large éventail de services dans la vente de maisons, d'appartements et de villas, mettant l'accent sur la satisfaction des clients et la prestation d'un service personnalisé et professionnel. La société est un point de référence pour ceux qui recherchent des opportunités d'investissement rentables ou des espaces de vie idéaux dans un environnement confortable et adapté à leur style de vie.</p>
           
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
          <video
                className={`video-player ${isPlaying ? "zoomed" : ""}`}
                ref={videoRef}
                src="./vii.mp4"
                alt=""
              />
            <div className="controls">
                <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default About
