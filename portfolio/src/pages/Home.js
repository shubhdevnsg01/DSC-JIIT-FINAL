
import React, { useState} from 'react';
import { useSpring, animated } from 'react-spring';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import Flash from 'react-reveal/Flash';
import { makeStyles } from '@material-ui/core/styles';




const width  = '1519px', height='380px';
const Container = styled.div`
  {/*border: 1px solid red;*/}
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};

`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const CarouselUI = ({ position, handleClick, children }) => (
  <Container>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  image : {
    height: 500,
    width: 500
  }
});



function Home() {
const classes = useStyles();
const [flip, set] = useState(false);
const props = useSpring({
  to: { opacity: 1 },
  from: { opacity: 0 },
  reset: true,
  reverse: flip,
  delay: 200,
  //config: config.molasses,
  onRest: () => set(!flip),


})

// const { freq, factor, scale, opacity } = useSpring({
//   from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
//     to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
//   config: { duration: 3000 },

// })


return (
		<div className="row ">
	           <div className="medium-12 columns">
              
  <section id="header">
    <div class="header contain">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero"> 
            <h1><span>W</span>elcome</h1>
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger">
            <div class="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#projects" data-after="Projects">Projects</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>



 
  <section id="hero">
    <div className="hero contain">
      
      <svg viewBox="0 0 1320 300">
	<text x="40%" y="18%" dy=".35em" text-anchor="middle">
		Shubham Singh
	</text>
</svg>	
      
      
      
      
      </div>
      
  </section>
  
  

  <section id="projects">
  
        <h1 class="section-title">Recent <span>Projects</span></h1>
      
  <Carousel className="caro">
   
    <Slide right>
    <Row>
      <Col span={9}> <a href=" https://github.com/shubhdevnsg01/calculator"> <img src ="./assests/calculator 2.png" alt="" className={classes.image}/></a></Col>
      <Col span={13}>
      <h2 class="voila">
        This was my first React JS project - A calculator!
        I have used React hooks to develop this one.
        <br/>
       What I learnt about ReactJS? <br/>
       •	Components and their reusability <br/>
       •	States and Functions to update them <br/>
       •	Npm installing packages and viewing them in node_modules <br/>
      
       <strong>Click on the picture to see the project on my git hub account</strong>
      </h2>
      </Col>
    </Row>
     
      


    
    </Slide>

    <Slide right>
     
      <Row>
        <Col span={9}><a href="https://github.com/shubhdevnsg01/snake-game">  <img src ="./assests/snake eating game screenshot.png" alt=""/> </a></Col>
        <Col span={13}>
        <h2 class="voila">

          I coded a snake eating game to learn and implements basic concepts of Javascript. 
          We all have played this game on our nokia phones back in the pre Android days. 
          This project focusses majorly on basics of Javascript, 
          it will help people who have just started learning JS.

           
          <strong>Click on the picture to see the project on my git hub account</strong>

          
        </h2>
        </Col>
      </Row>
      
     
      
    </Slide>




    <Slide right>
     
      <Row>
        <Col span={9}><a href="https://github.com/shubhdevnsg01/titanic-ML">  <img src ="./assests/titanic.jpg" alt=""/> </a></Col>
        <Col span={13}>
        <h2 class="voila">

        This was my first Machine learning project that I made. 
        This project enumerates the probability of the survivors on the basis of various variables like age, gender,social status, arrival on different ports etc. 
        I made it on google collaboratory as it has a friendly user-interface and works smoothly on your pc 
        (if you dont have a strong pc, then google collab really helps) 
        It is a fairly common project but its good for beginners.
          
          <strong>Click on the picture to see the project on my git hub account</strong>
        </h2>
        </Col>
      </Row>
      
     
      
    </Slide>



    <Slide right>
     
      <Row>
        <Col span={9}><a href="https://github.com/shubhdevnsg01/miscellaneous-projects">  <img src ="./assests/Screen.png" alt=""/> </a></Col>
        <Col span={13}>
        <h2 class="voila">

        This is a contact form that I made in a workshop conducted by DSC JIIT,
        These are some basics html css projects that I have made when I had started learning HTML,CSS.

        <strong>Click on the picture to see the project on my git hub account</strong>
          
        </h2>
        </Col>
      </Row>
      
     
      
    </Slide>
  </Carousel>
  
  </section>





  <section id="about">
    <div class="about contain">
      <div class="col-left">
        <div class="about-img">
    
        <Roll bottom>

        <img src="./assests/me.jpeg"  alt=" "/>
        
        </Roll>
        </div>
      </div>
      <div class="col-right">
      <animated.div style={props}><h1 class="section-title">About <span>me</span></h1></animated.div>
        <div>
        <Flip left>
        <h2>Front End Web Developer</h2>
        </Flip> 
        <Flip right>
        <p>
          <strong>
            <h3 class="fon">
          Hi! I am pursuing my Bachelors in Computer Science. I have begun my journey by learning languages like HTML, CSS, Javascript,React.Js, C++ and Python. 
          I am currently upskilling myself by developing small scale projects in these
           languages and hope that these baby steps will help me reach heights.!
           </h3>
           </strong>
        
           </p>
        </Flip>
        </div>
        <a href="assests/Shubham's Resume.pdf" class="cta" download="resume" >Download Resume</a>
      </div>
    </div>
  </section>
  

  
  <section id="contact">
    <div class="contact contain">
    <LightSpeed left>
      <div>
    
        <h1 class="section-title">Contact <span>info</span></h1>
    
      </div>
     </LightSpeed>

     
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/nolan/64/phone.png" alt= "img"/> </div>
          <div class="contact-info">
          <Flash>
            <h1>Phone</h1>
            <h2>+91 990 999 5603</h2>
            <h2>+91 878 012 9271</h2>
            </Flash>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/50/000000/email--v1.png" alt= " "/></div>
          <div class="contact-info">
          <Flash>
            <h1>Email</h1>
            <h2>iamshubhamsingh26@gmail.com</h2>
            <h2>9920103111@mail.jiit.ac.in</h2>
            </Flash>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/cute-clipart/50/000000/home.png" alt =" "/></div>
          <div class="contact-info">
          <Flash>
            <h1>Address</h1>
            <h2>Vadodara Gujarat India</h2>
            </Flash>
          </div>
        
        </div>
      </div>

    </div>
  </section>
  

  
  <section id="footer">
    <div class="footer contain">
      <div>
      <div class="brand">
      <Zoom left>
        <h1><span>S</span>hubham <span>S</span>ingh</h1>
      </Zoom>
      </div>
      </div>
      <Bounce right>
      <h2>Your Complete Web Solution</h2>
      </Bounce>
      
      <div class="social-icon">

       
        <div class="social-item">
          <a href="https://twitter.com/Shubham37782426"><img src="https://img.icons8.com/cute-clipart/64/000000/twitter.png" alt="" /></a>
          <link rel=""/>
        </div>
        
        <div class="social-item">
          <a href="https://www.instagram.com/shubham_singh972?r=nametag"><img src="https://img.icons8.com/cute-clipart/50/000000/instagram-new.png" alt=""/></a>
        </div>
        <div class="social-item">
          <a href="https://www.facebook.com/"><img src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png"alt =""/></a>
        </div>
        <div class="social-item">
          <a href="https://www.linkedin.com/in/shubham-singh-96b4751b4/"> <img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" alt=""/></a>
        </div>
      </div>

      <p>Copyright © 2020 Shubham. All rights reserved</p>
    </div>
  </section>      
                  
                  
                  


         </div>
            </div>  
	     );
    
}
export default Home;