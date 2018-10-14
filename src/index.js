import React,{Component} from 'react'
import ReactDom from 'react-dom'
import JSON from './db.json'

//components

import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {
    state = {
        news :JSON
    }
    render() {
        console.log(this.state.news)
        return (
            <div>
                <Header />
                <NewsList  news={this.state.news} donkey = "Me">
                <h3>The news are:</h3>
                </NewsList>
            </div>
        )
    }
}


ReactDom.render(<App />, document.querySelector('#root'))