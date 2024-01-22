import { useContext, useEffect, useRef, useState } from "react"
import { DropdownContext } from "@contexts"
import { sumChildrenHeights } from "@functions/generate"
import * as styles from "./DropdownWrapper.style"

export default function DropdownWrapper({
  align = "flex-start",
  justify = "flex-start",
  children
}) {
  
  const refWrapper = useRef(null);
  const [height, setHeight] = useState(0);
  const { active, theme, themes } = useContext(DropdownContext);
  useEffect(() => {
    if ( refWrapper.current ) {
      setHeight(sumChildrenHeights(refWrapper.current));
    }
  }, [refWrapper.current])
  return (
    <div ref={refWrapper} className={styles.dropdown_wrapper({
      theme,
      themes,
      align,
      justify,
      active,
      height,
      refWrapper
    })}>
      {children}
    </div>
  )
}
