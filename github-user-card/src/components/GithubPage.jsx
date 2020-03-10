import React, { Component } from 'react';
import GithubUserCard from './GithubUserCard';
import axios from 'axios';
import GithubFollowersCard from './GithubFollowersCard';


export default class GithubPage extends Component {
   
    constructor() {
        super();
        this.state = {
            user: [],
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/matthewwbolton')
            .then(res => {
                console.log(res.data);
                this.setState({
                    user: res.data
                })
                
            })
            .catch(err => console.log(err.message));
    }

   


   
   
    render() {
        return (
            <div>
             
                <GithubUserCard user={this.state.user}/>
                <GithubFollowersCard user={this.state.user}/>
              
            </div>
        
        )
    }
}
