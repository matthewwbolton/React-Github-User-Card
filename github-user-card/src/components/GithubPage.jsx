import React, { Component } from 'react';
import GithubUserCard from './GithubUserCard';
import axios from 'axios';
import GithubFollowersCard from './GithubFollowersCard';
import GithubSearchForm from './GitHubSearchForm';
import GithubContributionGraph from './GithubContributionGraph';



export default class GithubPage extends Component {
   
    constructor() {
        super();
        this.state = {
            user: [],
            userHandle: '',
            followers: [],
            graph: []
        }
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/matthewwbolton`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    user: res.data
                
                })
                
            })
            .catch(err => console.log(err.message));
    }

    
    handleChanges = e => {
        this.setState({
            userHandle: e.target.value
        });
    };
    
    
    fetchUser = e => {
        e.preventDefault();
        axios
            .get(`https://api.github.com/users/${this.state.userHandle}`)
            .then(res => {
                console.log(res);
                this.setState({
                    user: res.data
                })
            })
            .catch(err => console.log(err.message))

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.user !== this.state.user){
            console.log(`new user in state`);
            axios
                .get(`https://api.github.com/users/${this.state.user.login}/followers`)
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        followers: res.data
                    })})
                .catch(err => console.log(err.message));
        }

    }

    // componentDidUpdate(prevProps, prevState){
    //     if (prevState.user !== this.state.user){
    //         axios
    //             .get(`https://api.github.com/users/${this.state.user.login}/contributions`)
    //             .then(res => {
    //                 console.log(`this is the log for contribution graph`, res);
    //                 this.setState({
    //                     graph: res.data
    //                 })
    //             })
    //             .catch(err => console.log(err.message));
    //     }
    // }
    


   
   
    render() {
        console.log(this.state.user);
        return (
            <div>
                <GithubSearchForm  fetchUser={this.fetchUser} handleChanges={this.handleChanges}/>
                <GithubUserCard user={this.state.user}/>
                <GithubContributionGraph user={this.state.user} />
                <GithubFollowersCard followers={this.state.followers}/>
               
               
              
            </div>
        
        )
    }
}
