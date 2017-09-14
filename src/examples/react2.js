import React from "react"

const Summary = ({ text }) => (
  <div className="summary">{text}</div>
)

const Details = ({ text }) => (
  <div className="details">{text}</div>
)

export const BlogPost = () => (
  <div>
    <Summary text="This is a summary" />
    <Details text="These are the details" />
  </div>
)
