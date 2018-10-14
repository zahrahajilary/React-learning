import React, { Component } from 'react'
import '../css/style.css'


class Header extends Component {
   
        state = {
            title: ' the keywords are : ',
            keywords: 'hello',
            active:'active'
        }



    inputChangeHandler = (event) => {
        // const value = event.target.value === '' ? 'active':'non-activw'
        this.setState({
            // active : value,
            keywords:''
        })
    }
    render() {
       
        return (
            // <header style={{background:`${this.state.active ? 'red':'blue'}`}}>
            <header className={this.state.active}>
                <div
                    className="logo"
                >Logo</div>
                <input type="text" onChange={this.inputChangeHandler} />
                <div>{this.state.title} {this.state.keywords}</div>
            </header >
        )
    }
}



export default Header;