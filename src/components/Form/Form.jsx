import React, { useCallback, useEffect, useMemo, useState } from 'react'

//Images
import mascImage from '../../assets/mascImage.jpeg'
import FemImage from '../../assets/femImage.jpeg'
import BarberImage from '../../assets/barberImage.jpeg'

import styles from './Form.module.css'

const Form = () => {
  const [masc, setMasc] = useState("")
  const [priceMasc, setPriceMasc] = useState()
  const [fem, setFem] = useState("")
  const [priceFem, setPriceFem] = useState()
  const [barber, setBarber] = useState("")
  const [priceBarber, setPriceBarber] = useState()

  useEffect(() => {
    switch(masc) {
            case "degrade":
              setPriceMasc(30.00)
            break;
            case "degradeEstilizado":
              setPriceMasc(40.00)
            break;
            case "descoloração":
              setPriceMasc(50.00)
              break;
          }
  },[masc])

  useEffect(() => {
    switch(fem) {
            case "cacheadoDegrade":
              setPriceFem(35.00)
            break;
            case "lisoDegrade":
              setPriceFem(35.00)
            break;
            case "pinturaDesenho":
              setPriceFem(45.00)
              break;
            case "raspado":
              setPriceFem(20.00)
              break;
          }
  },[fem])

  useEffect(() => {
    switch(barber) {
            case "barba":
              setPriceBarber(20.00)
            break;
            case "barbaDesenhada":
              setPriceBarber(25.00)
            break;
          }
  },[barber])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <a href="">
            <img src={mascImage} alt="cabeloMasc" className={styles.img} />
          </a>
          <div className={styles.form_box}>
            <p>Corte Masculino</p>
              <select name="masc" onChange={(e) => setMasc(e.target.value)}>
                <option value="degrade">Degradê - Básico</option>
                <option value="degradeEstilizado">Degradê - Estilizado</option>
                <option value="descoloração">Pintura - Descolaração</option>
              </select>
            <p>R$ {priceMasc ? (
              priceMasc
            ) : (
              30.00
            )} <button type='submit'>Avançar</button></p>
          </div>
        </section>
        <section>
          <a href="">
            <img src={FemImage} alt="cabeloFem" className={styles.img}/>
          </a>
          <div className={styles.form_box}>
            <p>Corte Feminino</p>
            <select name='fem' onChange={(e) => setFem(e.target.value)}>
              <option value="cacheadoDegrade">Cacheado - Degradê</option>
              <option value="lisoDegrade">Liso - Degradê</option>
              <option value="pinturaDesenho">Pintura - Desenho</option>
              <option value="raspado">Raspado</option>
            </select>
           <p>R$ {priceFem ? (
              priceFem
            ) : (
              40.00
            )} <button type='submit'>Avançar</button></p>
          </div>
        </section>
        <section>
          <a href="">
            <img src={BarberImage} alt="barberImage" className={styles.img}/>
          </a>
          <div className={styles.form_box}>
            <p>Barba</p>
            <select name='barber' onChange={(e) => setBarber(e.target.value)} >
              <option value="barba">Barba - Clássica</option>
              <option value="barbaDesenhada">Barba - Desenhada</option>
            </select>
            <p>R$ {priceBarber ? (
              priceBarber
            ) : (
              20.00
            )} <button type='submit'>Avançar</button></p>
          </div>
        </section>
      </form>
    </>
  )
}

export default Form
