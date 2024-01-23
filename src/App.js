import './App.css'
import React, { Component } from 'react'
import Navbar from './Components/NavBar.js'
import News from './Components/News.js'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

export class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Router>
          <Navbar title='Taaza Khabar' />
          <Routes>

            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" category='general' />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" category='general' />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" category='business' />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" category='entertainment' />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" category='health' />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" category='science' />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" category='sports' />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" category='technology' />} />

          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
