import React, { Component } from 'react'

export default class GithubCard extends Component {
    
    // constructor(){
    //     super();
    //     this.state = {
    //         user: [],
    //     }
    // }
   
    
    render() {
        return (
            
            <div>
              <img src={this.props.user.avatar_url} alt={this.props.user.name} />
              <h1>Name: {this.props.user.name}</h1>
              <h2>Github Handle: {this.props.user.login}</h2>
              <h2>Profile:</h2><a href={this.props.user.url}>{this.props.user.url}</a>
              <h3>Location: {this.props.user.location}</h3>
              <h4>Followers: {this.props.user.followers}</h4>
              <h4>Following: {this.props.user.following}</h4>
              <h5>Biography: {this.props.user.bio}</h5>
            </div>
        )
    }
}
