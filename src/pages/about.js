import React from "react"
import Header from "../components/header"


export default function About() {
  return (
    <div style={{ color: `teal`, margin:'10px' }}>
    <Header headerText="About Gatsby" />
      <h1>My Education</h1>
      <p>Bsc (hons.) in Computing and Information Systems from
          <a href='https://www.londonmet.ac.uk/'> London Matropolitan University</a>
      </p>
   
    </div>
  )
}