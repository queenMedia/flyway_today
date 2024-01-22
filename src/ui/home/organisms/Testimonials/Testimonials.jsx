import React from "react"
import * as styles from "./Testimonials.style"
import { TestimonialCard } from "@molecules"
import { data } from "@data/testimonials"
import testimonial1 from "@images/testimonials/testimonial1.webp"
import testimonial2 from "@images/testimonials/testimonial2.webp"
import { Button } from "@sharing/atoms"

export default function Testimonials() {
  const { title, button, cards } = data
  const images = {
    "1": testimonial1,
    "2": testimonial2
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div className={styles.cards_container}>
          {cards.map(({img, content, name, job}, index) =>(
            <TestimonialCard 
              content={content}
              img={images[img]}
              name={name}
              job={job}
              alt={img}
            />
          ))}
        </div>
        <Button 
          types='submit'
          text={button}
          style={styles.button}
          action={''}
        />
      </div>
    </section>
  )
}
