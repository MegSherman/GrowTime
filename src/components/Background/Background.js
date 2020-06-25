import React from "react"
import poppies from "./../../images/poppy-background.jpg"
import styles from "./../../styles/styles.css"

function Background() {
  return (
    <div
      className='poppy-background'
      className='poppy-background'
      style={{
        backgroundImage: `url(${poppies})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        zIndex: "-1",
        position: "fixed",
      }}></div>
  )
}
export default Background
