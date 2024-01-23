import React from "react"
import * as styles from "./Profit.style"
import { data } from "@data/profit"
import { Dropdown } from "@sharing/molecules"
import { DropdownHeader, 
  DropdownTitle, 
  DropDownArrow, 
  DropdownText, 
  DropdownWrapper } from "@sharing/atoms"
import profit1 from "@images/profit/profit1.webp"
import profit2 from "@images/profit/profit2.webp"
import profit3 from "@images/profit/profit3.webp"

export default function Profit() {
  const { title, subtitle, text, accordion } = data
  const images = {
    "1": profit1,
    "2": profit2,
    "3": profit3
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
          {text.map((paragraph, index) => (
            <p key={index} className={styles.text}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.right_container}>
          {accordion.map(({img, title, content }, index) => (
            <Dropdown theme={"light"}>
              <DropdownHeader >
                <div className={styles.icon_text}>
                  <img 
                    src={images[img]}
                    alt={`profit-${index}`}
                    className={styles.img}
                    width="40px"
                    heigth="40px"
                  />
                  <DropdownTitle>
                    {title}
                  </DropdownTitle>
                </div>
                <DropDownArrow />
              </DropdownHeader>
              <DropdownWrapper>
                <DropdownText>
                  {content}
                </DropdownText>
              </DropdownWrapper>
            </Dropdown>
          ))}
        </div>
      </div>
    </section>
  )
}
