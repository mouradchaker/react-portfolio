import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Portfolio.scss'

function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
            idx={15}
          />
        </h1>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
