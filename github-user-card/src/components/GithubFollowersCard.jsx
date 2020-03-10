import React, { Component } from 'react'
import Axios from 'axios';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import styled from 'styled-components';

  const NewImg = styled.img`
    width: 40%;
  `;

  const NewDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const NewCard = styled(Card)`
    width: 20%
  `;

export default class GithubFollowersCard extends Component {
    
    constructor() {
        super();
        this.state = {
            followers: [],
        }
    }

    componentDidMount(){
        Axios
            .get(`https://api.github.com/users/${this.props.user.login}/followers`)
            .then(res => {
                console.log(res);
                this.setState({
                    followers: res.data
                })
            })
            .catch(err => console.log(err.message));
    }
    
    
    
    render() {
        return (
            <NewDiv>
                {this.state.followers.map(follower => (
              <NewCard key={follower.id}>
                <CardBody>
                  <CardTitle>Github Handle: {follower.login}</CardTitle>
                </CardBody>
                <NewImg width="100%" src={follower.avatar_url} alt={follower.login} />
                <CardBody>
                  <CardLink href={follower.url}>Profile Link</CardLink>
                </CardBody>
              </NewCard>
              ))}
           
            </NewDiv>
          );
    }
}
