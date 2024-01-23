import React from "react"
import { TravelCard } from "@atoms"
import { data } from "@data/travel"
import * as styles from "./TravelCards.style"

export default function TravelCards({
  arrow,
  text,
  button,
  bg
}) {
  const { cards } = data;
  const { button, list }  = cards;
  return (
    <div className={styles.container({bg})}>
      {arrow && <img 
        src={img}
        alt="arrow"
        width={45.911}
        height={30.698}
      />}
    </div>
  )
}
