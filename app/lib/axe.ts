import * as React from "react"

import * as ReactDOM from "react-dom"

export function setupAxe() {
  if (import.meta.env.DEV) {
    import("@axe-core/react").then((axe) => {
      axe.default(React, ReactDOM, 1000)
    })
  }
}
