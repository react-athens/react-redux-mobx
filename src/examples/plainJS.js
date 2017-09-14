import React from "react"
import { init } from "./plainJSinit"

export default class PlainJS extends React.Component {
  componentDidMount() {
    init(this.root)
  }

  render() {
    return <div style={{ margin: 20 }} ref={root => this.root = root} />
  }
}