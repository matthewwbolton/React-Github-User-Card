import React, { Component } from 'react'
import GithubPage from './components/GithubPage';

export default class App extends Component {
  
  constructor() {
    super();
    this.state= {
      user: [],
    }
  }
  
  
  render() {
    return (
      <div>
        <GithubPage />
        
      </div>
    )
  }
}

