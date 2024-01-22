import React from "react"
import * as styles from "./Footer.style"
import Logo from "@images/sharing/logo.webp"
import { Button, Mail, Address } from "@sharing/atoms"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top_footer}>
          <img
            src={Logo}
            alt="logo-footer"
            width="71px"
            height="60px"
            className={styles.logo}

          />
          <div className={styles.contact_container("item2")}>
            <div className={styles.text_container}>
              <Mail />
              <p className={styles.title}>Correo electrónico</p>
            </div>
            <p className={styles.text}>soporte@flywaytoday.com</p>
          </div>

          <div className={styles.contact_container("item3")}>
            <div className={styles.text_container}>
              <Address />
              <p className={styles.title}>Dirección</p>
            </div>
            <p className={styles.text}>IGNACIO ALLENDE 21 AMPLIACION TORRE BLANCA 11289 MIGUEL HIDALGO, CDMX</p>
          </div>
          <Button 
            types='submit'
            text="Inscribirme"
            style={styles.button}
            action={''}
          />
        </div>
        <p className={styles.text_bottom}>
          FlyWay 2023 All Right Reserved
        </p>
      </div>      
    </footer>
  )
}
