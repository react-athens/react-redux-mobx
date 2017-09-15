import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"

const Summary = ({ text }) => (
  <div className="summary">{text}</div>
)

const Details = ({ text, expanded, onClick }) => (
  <div className="details" onClick={onClick}>
    {expanded ? text : "Show more ..."}
  </div>
)

@observer
class BlogPost extends React.Component {
  @observable expanded = false

  onDetailsClick = () => {
    this.expanded = !this.expanded
  }

  render() {
    return <div>
      <Summary text="This is a summary" />
      <Details
        text="These are the details"
        expanded={this.expanded}
        onClick={this.onDetailsClick} />
    </div>
  }
}

// App.jsx

const App = () => (
  <BlogPost />
)

export { App }