import React, { Component } from 'react';  
import CatList from './CatList'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'

class App extends Component {   
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.catPics) // log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.props.loading ? <h3>Loading...</h3> : <CatList catPics={this.props.catPics} /> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)
