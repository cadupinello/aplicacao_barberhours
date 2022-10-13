import React from 'react'
import Form from '../Form/Form'

// Images
import LOGO from '../../assets/logoEmpresa.png'

// CSS
import styles from './Box.module.css'

const Box = () => {
  return (
    <>
      <main className={styles.box}>
        <div className={styles.divImage}>
          <img src={LOGO} alt="logoBarber" className={styles.logo}/>
        </div>
        <h5 className={styles.subtitle}>Clique nos icones para agendar um horário</h5>
        <Form />
      </main>
    </>
  )
}

export default Box
