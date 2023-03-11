import Head from 'next/head'
import template from './data/templates'
import Layout from '../components/layout'
import React from 'react';


class Home extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      json: null,
      text: null
    };
  }

  //imageData.base = Base64 image | imageData.phrase === {noun: && adjective:}

  //Feel free to delete any of this stuff, it's just there for you to test out the image thing
  async fetchImageData() {
    fetch('http://localhost:3000/api/photo').then(res => {
      res.json().then(jsonres => {
        console.log(jsonres.phrase);
        this.setState({json: jsonres});
      }).catch(err => {throw err});
    });

    this.setState({text: template()});
  }

  setJsonState(json) {
    this.setState(json);
  }

  componentDidMount() {
    this.fetchImageData();
  }

  render() {
    return (
      <Layout>
        <Head>  
        <script src="https://kit.fontawesome.com/757afa4be3.js" crossOrigin="anonymous"></script>
          <title>Getflix</title>
        </Head>  
            
            
        
    <div className='template-text'>
    <h2 className="main-title">{this.state.json === null ? null : this.state.json.phrase}</h2>
    <div className='ratings'>
    <div className={`${this.state.text === null ? 'nothing' : this.state.text.rating}-classification`}/><p className="hd">   HD</p>   <p>{this.state.text === null ? null : this.state.text.genre}</p>
    </div>
      <p className='text-synopsys'>{this.state.text === null ? null : this.state.text.synopsys}</p>
      <button className='generate-btn' onClick={this.fetchImageData.bind(this)} ><i aria-hidden className="fas fa-play"></i> Generate</button>
    </div>

    <div className='template-img'>
        {this.state.json === null ? null : <img className='focus-img' src={this.state.json.base} alt="a cool pic" />}
    </div>

      </Layout>
    );
  }
}

export default Home;