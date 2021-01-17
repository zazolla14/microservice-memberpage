import React, { useState } from "react"

export { default as Item } from "./Item"
export { default as IconPlay } from "public/images/details-course/icon-play.svg"
export { default as IconLock } from "public/images/details-course/icon-lock.svg"

export default function Accordion({ children }) {
  const [active, setActive] = useState(() => null)
  function toggle(id) {
    setActive((prev) => (prev === id ? null : id))
  }
  return <div className="accordion">{children(active, toggle)}</div>
}
