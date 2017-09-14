import React from "react"
import { createStore } from "redux"
import { connect, Provider } from "react-redux"

const Summary = ({ text }) => (
  <div className="summary">{text}</div>
)

const Details = ({ text, expanded, onClick }) => (
  <div className="details" onClick={onClick}>
    {expanded ? text : "Show more ..."}
  </div>
)

const BlogPost = ({ expanded, onDetailsClick }) => (
  <div>
    <Summary text="This is a summary" />
    <Details
      text="These are the details"
      expanded={expanded}
      onClick={onDetailsClick} />
  </div>
)

const mapStateToProps = state => ({
  expanded: state.expanded
})
const mapDispatchToProps = dispatch => ({
  onDetailsClick: () => dispatch({
    type: "TOGGLE_DETAILS"
  })
})

const BlogPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPost)

// reducer.js:

const initialState = {
  expanded: false
}

const reducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_DETAILS") {
    return {
      ...state,
      expanded: !state.expanded
    }
  } else {
    return state
  }
}

// App.jsx

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <BlogPostContainer />
  </Provider>
)

export { App }