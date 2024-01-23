import { useContext } from "react"
import { DropdownContext } from "@contexts"
import * as styles from "./DropDownArrow.style"

export default function DropDownArrow() {
  const { 
    themes, 
    theme,
    active
  } = useContext(DropdownContext);
  return (
    <div className={styles.icon({themes, theme, active})}>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 30 23" fill="none">
      <path d="M14.1279 21.6223C14.2624 21.8177 14.4425 21.9774 14.6525 22.0878C14.8625 22.1982 15.0962 22.2559 15.3334 22.2559C15.5707 22.2559 15.8044 22.1982 16.0144 22.0878C16.2244 21.9774 16.4044 21.8177 16.5389 21.6223L29.738 2.5569C29.8908 2.337 29.9804 2.07943 29.9971 1.81219C30.0137 1.54494 29.9569 1.27824 29.8326 1.04105C29.7083 0.803863 29.5215 0.605266 29.2922 0.466837C29.063 0.328408 28.8003 0.255439 28.5325 0.255861H2.13433C1.86718 0.256965 1.60539 0.330871 1.37711 0.469632C1.14883 0.608393 0.962693 0.806759 0.838718 1.0434C0.714743 1.28003 0.657621 1.54599 0.673495 1.81267C0.689369 2.07934 0.777639 2.33664 0.928811 2.5569L14.1279 21.6223Z" fill="#1070FF"/>
    </svg>
    </div>
  )
}
