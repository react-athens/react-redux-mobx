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
  render() {
    const store = this.props.store
    return <div>
      <Summary text="This is a summary" />
      <Details
        text="These are the details"
        expanded={store.expanded}
        onClick={store.onDetailsClick} />
    </div>
  }
}

// store.js:

class Store {
  @observable expanded = false

  onDetailsClick = () => {
    this.expanded = !this.expanded
  }
}

// App.jsx

const store = new Store()

const App = () => (
  <BlogPost store={store} />
)

export { App }