import React from "react"
import * as styles from "./Footer.style"
import Logo from "@images/sharing/logo.webp"
import { data } from "@data/footer"
import { Button, Mail, Address } from "@sharing/atoms"

export default function Footer() {
  const { title_email, 
    email, 
    title_address, 
    address, 
    button,
    copy } = data
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
              <p className={styles.title}>{title_email}</p>
            </div>
            <p className={styles.text}>{email}</p>
          </div>

          <div className={styles.contact_container("item3")}>
            <div className={styles.text_container}>
              <Address />
              <p className={styles.title}>{title_address}</p>
            </div>
            <p className={styles.text}>{address}</p>
          </div>
          <Button 
            types='submit'
            text={button}
            style={styles.button}
            action={''}
          />
        </div>
        <p className={styles.text_bottom}>
          {copy}
        </p>
      </div>      
    </footer>
  )
}
