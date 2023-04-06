import React, { useEffect, useRef } from 'react'
import './Logo.scss'
import LogoS from '../../../assets/images/logo-s.png'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import profile from '../../../assets/images/profil.png'
import profile2 from '../../../assets/images/profil2.jpeg'
function Logo() {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <div id="frame">
        <div id="border">
          <img src={profile2} alt="" />
        </div>
      </div>
      {/*<img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" /> */}
    </div>
  )
}

export default Logo
