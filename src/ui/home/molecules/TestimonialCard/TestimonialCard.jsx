import React from "react"
import * as styles from "./TestimonialCard.style"
import { Stars } from "@sharing/atoms"

export default function TestimonialCard({content, img, name, job, alt}) {
  return (
    <div className={styles.card}>
      <Stars />
      <p>{content}</p>

      <div className={styles.bottom_container}>
        <img 
          src={img}
          alt={`testimonial-${alt}`}
          className={styles.img}
          width="130px"
          height="130px"
        />
        <div className={styles.text_container}> 
          <p className={styles.name}>{name}</p>
          <p className={styles.job}>{job}</p>
        </div>
      </div>
    </div>
  )
}
