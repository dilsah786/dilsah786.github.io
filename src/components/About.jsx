import Styled from "styled-components";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledDiv = Styled.div`
       width : 60%;
       margin : auto;
       text-align : center;
       margin-bottom : 200px;
     

         @media (max-width : 768px) {
              width : 60%;
         }

         @media (max-width : 500px) {
              width : 90%;
         }
       }`


const About = () => {
      React.useEffect(() => {
            Aos.init({
                duration : 2000
            })
      } , []);
    return(
          <StyledDiv id = "about">
                 <p style = {{
                       fontSize : "30px",
                       paddingBottom : "10px",
                       fontWeight : "bold",
                       fontFamily : "sans-serif",
                       borderBottom : "3px solid #78C7C7",
                       color : "#78C7C7"
                 }}>About</p>
                 <p
                    style = {{
                        fontSize : "24px",
                        paddingBottom : "10px",
                        fontWeight : "600",
                        fontFamily : "sans-serif",
                        
                    }}>My name is Md Dilnawaz Alam</p>
                 <p data-aos = "fade-down" style = {{
                        fontSize : "18px",
                        border : "3px solid #78C7C7",
                        padding: "50px 10%"
                 }}>An aspiring Full Stack Web Developer with the knowledge of JavaScript and Data Structure & Algorithm.
                Looking forwad to enhance my skills and knowledge as a very good developer.</p>
               
          </StyledDiv>
    )
}

export {About};