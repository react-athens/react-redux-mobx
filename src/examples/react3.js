import React from "react"

const Summary = ({ text }) => (
  <div className="summary">{text}</div>
)

const Details = ({ text, expanded, onClick }) => (
  <div className="details" onClick={onClick}>
    {expanded ? text : "Show more ..."}
  </div>
)

export class BlogPost extends React.Component {
  constructor() {
    super()
    this.state = { expanded: false }
  }

  onDetailsClick = () => {
    this.setState({ 
      expanded: !this.state.expanded
    })
  }

  render() {
    return (
      <div>
        <Summary text="This is a summary" />
        <Details
          text="These are the details"
          expanded={this.state.expanded}
          onClick={this.onDetailsClick} />
      </div>
    )
  }
}
