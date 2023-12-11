import React from "react";
import Styled from "styled-components";
import {Github , Linkedin } from "./Icon";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledDiv = Styled.div`
width : 90%;
margin : auto;
display : flex;
justify-content : space-around;
margin-top : 120px;
margin-bottom : 200px;

@media (max-width : 450px) {
    width : 95%;
    display : flex;
    flex-direction : column-reverse;

}

&>div:nth-child(1){
    width : 45%;
    
    @media (max-width : 450px) {
         width : 80%;
         margin : auto;
       
    }
}

&>div:nth-child(2){
    padding-top : 50px;
       width : 40%;
    text-align : center;

    @media (max-width : 450px) {
        width : 80%;
        margin : auto;
   }
}`

const StyledP = Styled.p`
font-size : 50px;
font-family : sans-serif;
font-weight : 800;
line-height : 70px;

@media (max-width : 450px) {
    font-size : 30px;
    line-height : 40px;
}
`
const ResumeA = Styled.a`
       background : #78C7C7;
       padding : 10px 20px;
       text-align : center;
       border-radius : 10px;
       cursor : pointer;
       color : #36013F;
       text-decoration : none;
     

       &:hover{
           color : #36013F;
           border : 2px solid #78C7C7;
           background : #FFFFFF;
           transition : background 0.5s 
       }`

const IconDiv = Styled.div`
      display : flex;
    gap : 30px;
    margin-top : 30px;

    &>a>*{
        color : black;
    }

    &>a>*:hover{
        color : #78C7C7;
    }

`

const Home = () => {
    const downloadResume = () => {
      const pdfUrl = "Md Dilnawaz Alam Resume.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      window.open("Md Dilnawaz Alam Resume.pdf");
      link.download = "Md Dilnawaz Alam Resume.pdf"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    React.useEffect(() => {
      Aos.init({
        duration: 2000,
      });
    }, []);
  
    return (
      <StyledDiv id="home">
        <div>
          <StyledP data-aos="fade-right">
            Hi 👋,
            <br></br>
            I'am{" "}
            <span
              style={{
                color: "#78C7C7",
              }}
            >
              Md Dilnawaz Alam
            </span>
            <br></br>
            Full Stack Web Developer
          </StyledP>
          <ResumeA
            onClick={downloadResume}
            data-aos="fade-down"
            href="Md Dilnawaz Alam Resume.pdf"
            target="_blank"
            title="Resume"
            rel="noopener noreferrer"
          >
            RESUME
          </ResumeA>
  
          <IconDiv>
            <a
              href="https://www.linkedin.com/in/md-dilnawaz-alam-a753861a4/"
              target="_blank"
              title="Linkedin"
              rel="noopener noreferrer"
            >
              {" "}
              <Linkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/dilsah786"
              target="_blank"
              title="Github"
              rel="noopener noreferrer"
            >
              {" "}
              <Github />{" "}
            </a>
          </IconDiv>
        </div>
        <div>
          <img
            alt="profilePic"
            src="Profile.png"
            width="100%"
            style={{
              borderRadius: "80%",
            }}
          />
        </div>
      </StyledDiv>
    );
  };
  
  export { Home };
  