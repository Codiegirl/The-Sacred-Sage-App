import React,{Component} from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import QuizContainer from './containers/QuizContainer'
import Result from './components/Result'
import { BrowserRouter, Route } from 'react-router-dom'


export default class App extends Component {
  state = {
    products: []
}


// componentDidMount(){
// fetch("http://localhost:3000/ProductBundle")
//     .then( res => res.json())
//     .then( products => this.setState({
//     products: products
// }))
// }


        

    render() {
      let allProducts = this.state.products
        return (
            <div className="App">
                <BrowserRouter>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route path="/quiz" component={QuizContainer}/>
                     <Route path="/result" component={Result}/>
                </BrowserRouter>
             
            </div>

        );
    }
}



