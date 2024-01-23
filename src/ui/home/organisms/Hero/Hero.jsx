import React from "react"
import { ContactForm } from "@sharing/organisms"
import { data } from "@data/hero"
import * as styles from "./Hero.style"

export default function Hero() {
  const { title, subtitle } = data;
  return (
    <section className={styles.section}>
      <div className={styles.white}></div>
      <div className={styles.container}>
        <div className={styles.content_container}>
          <h1 className={styles.title}>
            {title.map((item_title, index) => (
              <span key={`item-title-${index}`}>{item_title}</span>
            ))}
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
