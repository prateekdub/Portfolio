import React  from 'react';

const About = (props) => {
   let model = {}
       if(props.data){
      model = {...props.data};
    }
   return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={'images/'+model.image} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{model.bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{model.name}</span><br />
						   <span>{model.street}<br />
						         {model.city} {model.state}, {model.zip}
                   </span><br />
						   <span>{model.phone}</span><br />
                     <span>{model.email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={model.resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    )
}

export default About;
