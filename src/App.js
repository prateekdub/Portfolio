import React, { Component, lazy, Suspense } from 'react';
// import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/header/Header';
// import Footer from './Components/Footer';
// import About from './Components/About';
// import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
// import Portfolio from './Components/Portfolio';
// import React, { lazy, Suspense } from ‘react’;

// const LoadLater = lazy(() => import('./LoadLater'));

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    // ReactGA.initialize('UA-110570651-1');
    // ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    // window.addEventListener('scroll', this.loadOnScroll);
  }
  

  // returnComponent () {
  //   const config = {
  //     root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
  //     rootMargin: '0px',
  //     threshold: 0.5
  //   };
  //   const imageObserver = new IntersectionObserver((entries, imgObserver) => {
  //     entries.forEach((entry) => {
  //         if(entry.isIntersecting) {
  //           import("./Components/About").then(math => {
  //             <About data={this.state.resumeData.main}/>
  //           });
  //         }
  //     })
  // });
  
  // }
  // componentWillUnmount(){
  //   window.removeEventListener('scroll', this.loadOnScroll);
  // }


  render() {
    return (
      <div className="App">
        {/* <p>ddd</p> */}
        <Header data={this.state.resumeData.main}/>
        {/* <Suspense fallback={<h1>Still Loading…</h1>}>
        <LoadLater resumeData={this.state.resumeData}/>
        </Suspense> */}
        {/* <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}

export default App;
