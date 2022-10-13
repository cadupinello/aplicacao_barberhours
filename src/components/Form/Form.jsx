import React from 'react'

//Images
import mascImage from '../../assets/mascImage.jpeg'
import FemImage from '../../assets/femImage.jpeg'
import BarberImage from '../../assets/barberImage.jpeg'

import styles from './Form.module.css'

const Form = () => {
  return (
    <>
      <form >
        <section>
          <a href="">
            <img src={mascImage} alt="cabeloMasc" className={styles.img} />
          </a>
          <div className={styles.form_box}>
            <p>Corte Masculino</p>
              <select>
                <option value="desgrade">Degrade - Básico</option>
                <option value="degradeEstilizado">Degrade - Estilizado</option>
                <option value="descoloração">Pintura - Descolaração</option>
              </select>
            <p>R$ 30,00</p>
          </div>
        </section>
        <section>
          <a href="">
            <img src={FemImage} alt="cabeloFem" className={styles.img}/>
          </a>
          <div className={styles.form_box}>
            <p>Corte Feminino</p>
            <select>
              <option value="cacheadoDegrade">Cacheado - Degrade</option>
              <option value="lisoDegrade">Liso - Degrade</option>
              <option value="pinturaDesenho">Pintura - Desenho</option>
              <option value="raspado">Raspado</option>
            </select>
            <p>R$ 65,00</p>
          </div>
        </section>
        <section>
          <a href="">
            <img src={BarberImage} alt="barberImage" className={styles.img}/>
          </a>
          <div className={styles.form_box}>
            <p>Corte Masculino</p>
            <select>
              <option value="barbear">Barba - Clássica</option>
              <option value="casc">Barba - Desenhada</option>
            </select>
            <p>R$ 20,00</p>
          </div>
        </section>
      </form>
    </>
  )
}

export default Form
