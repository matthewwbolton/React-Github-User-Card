import React, { Component } from 'react';
import GithubCard from './GithubCard';
import axios from 'axios';


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
             
                <GithubCard user={this.state.user}/>
              
            </div>
        
        )
    }
}
