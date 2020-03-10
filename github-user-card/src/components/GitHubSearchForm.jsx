import React, { Component } from 'react'

export default class GitHubSearchForm extends Component {
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.fetchUser}>
                    <label htmlFor='search'>Search Github Users:
                        <input onChange={this.props.handleChanges} id='search' name='search' placeholder='search' type='text'/>
                    </label>
                </form>
                <button type='submit'>Search</button>
                
            </div>
        )
    }
}
