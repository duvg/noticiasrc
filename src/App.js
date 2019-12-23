import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {
  state = {
    noticias: []
  }
  componentDidMount() {
    this.consultarNoticias();  
  }

  consultarNoticias = async () => {
    const url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42bf9a0839fc453eb4da7934bb134d63`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    });
  }

  render() {
    return (
      <Fragment>
        <Header titulo={"Noticias React 'News API' "} />
        <div className="container white contenedor-noticias">
          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
      
    );
  }
}

export default App;
