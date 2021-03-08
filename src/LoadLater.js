
import React from 'react';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';
import Resume from './Components/resume/Resume';
import Contact from './Components/contact/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/portfolio/Portfolio';
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