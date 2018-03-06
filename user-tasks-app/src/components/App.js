import React from 'react'
import Preloader from './helpers/preloader.component.jsx'
import CardsContainer from './user-cards/cards.container.component.jsx'


export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      shouldShow: true
    }
  }
  
  componentDidMount() {
    this.setState({
      shouldShow: setTimeout(() => { this.setState({ shouldShow: false }) }, 3000)
    })
  }

  render() {
    return (
      (this.state.shouldShow) ? (
        
        <Preloader />
      ) : (
        <CardsContainer />
      ) 
    );
  }
}

