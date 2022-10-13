import React from 'react'
import {BsInstagram, BsFacebook, BsWhatsapp} from 'react-icons/bs'

// CSS
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
            <p>Siga a gente nas redes sociais</p>
            <a href="">
              <BsInstagram/>
            </a>
            <a href="">
              <BsFacebook/>
            </a>
            <a href="">
              <BsWhatsapp/>
            </a>
            <p>Aplicação em testes</p>
      </footer>
    </>
  )
}

export default Footer
