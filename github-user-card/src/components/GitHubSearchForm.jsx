import React, { Component } from 'react';
import styled from 'styled-components';

const NewDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 2%;
`;

export default class GitHubSearchForm extends Component {
    
    render() {
        return (
            <NewDiv>
                <form onSubmit={this.props.fetchUser}>
                    <label htmlFor='search'>Search Github Users: 
                        <input onChange={this.props.handleChanges} id='search' name='search' placeholder='search' type='text'/>
                    </label>
                </form>
                <button type='submit'>Search</button>
                
            </NewDiv>
        )
    }
}
