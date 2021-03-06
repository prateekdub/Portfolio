
import React from 'react';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
const LoadLater = (props) => {
    return (
        <React.Fragment>
            <About data={props.resumeData.main} />
            <Resume data={props.resumeData.resume} />
            <Portfolio data={props.resumeData.portfolio} />
            {/* <Testimonials data={props.resumeData.testimonials} /> */}
            <Contact data={props.resumeData.main} />
            <Footer data={props.resumeData.main} />
        </React.Fragment>

    )
}
export default LoadLater;