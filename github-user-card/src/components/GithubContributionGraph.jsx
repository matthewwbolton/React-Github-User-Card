import React, { Component } from 'react'
import styled from 'styled-components';

const NewImg = styled.img`
    width: -webkit-fill-available;
`;

export default class GithubContributionGraph extends Component {
    render() {
        return (
            <div>
                <NewImg src={`https://ghchart.rshah.org/409ba5/${this.props.user.login}`} alt={`${this.props.user.name}'s Github Chart`}/>
            </div>
        )
    }
}
