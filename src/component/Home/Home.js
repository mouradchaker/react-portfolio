import React from 'react'
import './Home.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          lobodan
          <br />
          web developer
        </h1>

        <h2>FullStack Developer / JavaScript Expert</h2>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
