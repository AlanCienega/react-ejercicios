import { useRef, useState } from "react";
import Tooltip from './Tooltip'

function TooltipText({children, tooltip}) {
  let spanElement = useRef()
  let [tooltipDoomRect, setTooltipDomRect] = useState()
  let [showTooltip, setShowTooltip] = useState(false)

  function handleMouseOver() {
    let domData = spanElement.current.getBoundingClientRect();
    setTooltipDomRect(domData)
    setShowTooltip(true)
  }
  return(
    <>
    <span className="tooltip-text" ref={spanElement} onMouseLeave={() => setShowTooltip(false)} onMouseOver={ev => handleMouseOver(ev)}>
      { children }
    </span>
    {
      showTooltip && <Tooltip domRect={tooltipDoomRect} text={tooltip} />
    }
    </>
  )
}

export default TooltipText;