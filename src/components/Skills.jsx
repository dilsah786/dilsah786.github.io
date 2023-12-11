import Styled from "styled-components";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const StyledDiv = Styled.div`
      
`
const StyledP = Styled.p`
       text-align : center;
       font-size : 30px;
       font-weight : bold;
       padding-bottom : 10px;
       color : #78C7C7;
       border-bottom : 3px solid #78C7C7;
       width : 40%;
       margin : auto;

       @media (max-width : 768px) {
              width : 60%;
       }

       @media (max-width : 500px){
              width : 90%;
       }
`

const GridDiv = Styled.div`
       display : grid;
       grid-template-columns : repeat(4 , 1fr);
       grid-gap : 80px;
       width : 60%;
       margin : auto;
       margin-top : 50px;
       height : auto;

       @media (max-width : 768px){
              width : 80%;
              grid-template-columns : repeat(3, 1fr);
              grid-gap : 40px;
            
       }

       @media (max-width : 450px){
              width : 100%;
              grid-template-columns : repeat(3, 1fr);
              grid-gap : 3px;
       }

       @media (max-width : 350px){
              width : 100%;
              grid-template-columns : repeat(2, 1fr);
              grid-gap : 3px;
       }


         &>div{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius : 10px;
         }

         &>div img {
            display : block;
            margin : auto;
            width : 80px;
            margin-top : 20px;
         }
       &>div p {
        text-align : center;
       }

       // &>div:nth-child(9){
       //   grid-column-start : 2;

       //   @media (max-width : 768px){
       //        grid-column-start : 3;
       //   }

       }`

const Skills = () => {
       React.useEffect(() => {
              Aos.init({
                  duration : 2000
              })
        } , []);
    return(
        <StyledDiv id = "skill">
                 <StyledP>Skills</StyledP>
                 <GridDiv>
                            <div data-aos = "fade-down">
                                   <div>
                                         <img alt = "html5" src = {"html5.png"}/>
                                   </div>
                                   <p>HTML5</p>
                            </div>

                            <div data-aos = "fade-down">
                                   <div>
                                         <img alt = "css3" src = {"css3.png"}/>
                                   </div>
                                   <p>CSS3</p>
                            </div>

                            <div  data-aos = "fade-down">
                                   <div>
                                         <img alt = "javascript" src = {"javascript.png"}/>
                                   </div>
                                   <p>JAVASCRIPT</p>
                            </div>

                            <div  data-aos = "fade-down">
                                   <div>
                                         <img alt = "Java" src = {"Java.jpg"}/>
                                   </div>
                                   <p>Java </p>
                            </div>

                            <div  data-aos = "fade-down">
                                   <div>
                                         <img alt = "react" src = {"react.png"}/>
                                   </div>
                                   <p>REACT</p>
                            </div>

                            <div  data-aos = "fade-down">
                                   <div>
                                         <img alt = "redux" src = {"redux.png"}/>
                                   </div>
                                   <p>REDUX</p>
                            </div>

                            <div  data-aos = "fade-down">
                                   <div>
                                         <img alt = "json" src = {"json.png"}/>
                                   </div>
                                   <p>JSON-SERVER</p>
                            </div>

                            <div  data-aos = "fade-down">
                                   <div>
                                         <img alt = "vs" src = {"vscode.jpg"}/>
                                   </div>
                                   <p>VISUAL STUDIO</p>
                            </div>

                            <div  data-aos = "fade-down">
                                   <div>
                                         <img alt = "nodejs" src = {"nodejs.png"}/>
                                   </div>
                                   <p>NODE JS</p>
                            </div>

                            <div  data-aos = "fade-down">
                                   <div>
                                         <img alt = "mongodb" src = {"mongodb.png"}/>
                                   </div>
                                   <p>MONGODB</p>
                            </div>

                            <div data-aos = "fade-down">
                                   <div>
                                         <img alt = "github" src = {"github.png"}/>
                                   </div>
                                   <p>GITHUB</p>
                            </div>
                            <div  data-aos = "fade-down">
                                   <div>
                                         <img alt = "Postman" src = {"Postman1.jpg"}/>
                                   </div>
                                   <p>Postman</p>
                            </div>
                 </GridDiv>
        </StyledDiv>
    )
}

export {Skills}