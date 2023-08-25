import React from 'react'
import style from "./Footer.module.css"

function Footer() {
  return (
    <div>
       <div className={style.footer}>
      <p>This is the footer content.</p>
      <div className={style["social-icons"]}>
        <a href="https://www.facebook.com/" id={style.facebook} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" id={style.tweet} rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" id={style.insta} rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" id={style.linkdin} rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Footer
