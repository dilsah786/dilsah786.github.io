import Styled from "styled-components";
import { Hcj } from "./Hcj";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledDiv = Styled.div`
     margin-top : 120px;

     &>p:first-child{

        font-size : 30px;
        width : 40%;
        margin : auto;
        text-align : center;
       padding-bottom : 10px;
       font-weight : bold;
       font-family : sans-serif;
       border-bottom : 3px solid #78C7C7;
       color : #78C7C7;

       @media (max-width : 768px) {
          width : 60%;
       }

       @media (max-width : 500px) {
        width : 90%;
     }


     }
`;

const ProjectDiv = Styled.div`
     display : flex;
     width : 80%;
     margin : auto;
     height : 480px;
     border : 5px solid #78C7C7;
     margin-top : 80px;
     justify-content : space-around;
     align-items : center;

     @media (max-width : 1250px){
        height : 550px;
     }

     @media (max-width : 950px){
       flex-direction : column;
       height : auto;
       padding-top : 40px;
       padding-bottom : 40px;
    }`;

const PictureHcjDiv = Styled.div`
   width : 55%;
   height : 80%;

   @media (max-width : 950px){
      width : 90%;
      padding-bottom : 40px;
   }

    &>div:first-child{
        width : 100%;
        height : 70%;
        margin-bottom : 40px;
        border : 2px solid rgba(0 , 0, 0, 0.8);

      
    }

   &>div:first-child img {
     width : 100%;
     height : 100%;
   }
    
   &>div:first-child img:hover{
       transform : scale(1.05);
       transition : all 1s ease-in 0.3s;
   }
   `;

const TextDiv = Styled.div`
       width : 37%;
       height : 80%;

       @media (max-width : 950px){
        width : 90%;
     }
     
       &>div{
           color : #78C7C7;
           text-align : center;
           font-family : sans-serif;
           font-weight : bold;
           font-size : 30px;
       }

       & ul>li {
           font-size : 18px;
           font-family : sans-serif;
           padding : 10px;
     }`;

const AnchorDiv = Styled.div`
    display : flex;
    width : 50%;
    margin : auto;
    justify-content : space-between;

    @media (max-width : 1250px){
         width : 80%;
    }

    @media (max-width : 950px){
        width : 60%;
   }

   @media (max-width : 450px){
      width : 80%;
 }
        
`;
const StyledA = Styled.a`
   text-decoration : none;
   cursor : pointer;
   background : #78C7C7;
   color : #36013F;
   padding : 10px 24px;
   font-size : 14px;
   font-family : sans-serif;
   border-radius : 5px;

   

   &:hover{
       background : white;
       border : 2px solid #78C7C7;
       transition all 1s ease-in; 
   }
`;

const Projects = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
   <StyledDiv id="project">
   <p>Projects</p>

   <ProjectDiv data-aos="fade-down">
     <PictureHcjDiv>
       <div>
         <img alt="lifeStyle" src={"Voyawander.PNG"} />
       </div>
       <Hcj />
     </PictureHcjDiv>
     <TextDiv>
       <div>Voyawander.com</div>
       <ul>
         <li>
           {" "}
           This is a travel website where user can book his destination
           according to their choice for travelling.
         </li>
         <li>
           {" "}
           You can book destination all around the world and book hotels with
           us. You can view all the details of hotel rooms with easy.
         </li>
         <li>
           {" "}
           Login page , signup page and Payment page are also implemented
           here.
         </li>
         <li>
           {" "}
           Collaborative Project with the team size of five members in the
           duration of one week.
         </li>
       </ul>

       <AnchorDiv>
         <StyledA
           href="https://voyawander-cw.netlify.app/"
           target="_blank"
           title="Voyawander.com"
           rel="noopener noreferrer"
         >
           DEMO
         </StyledA>
         <StyledA
           href="https://github.com/dilsah786/Voyawander"
           target="_blank"
           title="Voyawander.com"
           rel="noopener noreferrer"
         >
           CODE
         </StyledA>
       </AnchorDiv>
     </TextDiv>
   </ProjectDiv>
   <ProjectDiv data-aos="fade-down">
     <PictureHcjDiv>
       <div>
         <img alt="Myntra.com" src={"Myntra.PNG"} />
       </div>
       <Hcj />
     </PictureHcjDiv>
     <TextDiv>
       <div>Myntra.com</div>
       <ul>
         <li>
           {" "}
           This is a shopping wbsite for different types of Clothes and other
           products.
         </li>
         <li> There are add to Cart functionality and checkout Page. </li>
         <li>
           {" "}
           In homepage sliding Show of products and some carousel also to
           show the product.
         </li>
         <li>
           {" "}
           Collaborative Project with the team size of 4 members in the
           duration of one week.
         </li>
       </ul>

       <AnchorDiv>
         <StyledA
           href="https://myntra8.netlify.app/"
           target="_blank"
           title="Myntra.com"
           rel="noopener noreferrer"
         >
           DEMO
         </StyledA>
         <StyledA
           href="https://github.com/dilsah786/Myntra-Ecommerce-Clone"
           target="_blank"
           title="Myntra.com"
           rel="noopener noreferrer"
         >
           CODE
         </StyledA>
       </AnchorDiv>
     </TextDiv>
   </ProjectDiv>
   <ProjectDiv data-aos="fade-down">
     <PictureHcjDiv>
       <div>
         <img alt="spares" src={"Autoparts.PNG"} />
       </div>
       <Hcj />
     </PictureHcjDiv>
     <TextDiv>
       <div>Autoparts.com</div>
       <ul>
         <li>
           {" "}
           Online store of spare parts of car where user can explore the page
           and go through it.
         </li>
         <li>
           {" "}
           There are add to cart functionality and increase or decrease the
           items also.{" "}
         </li>
         <li>
           {" "}
           CheckOut and Payment page also implemented where user go to
           payment.
         </li>
         <li>
           {" "}
           Collaborative Project with the team size of five members in the
           duration of one week.
         </li>
       </ul>

       <AnchorDiv>
         <StyledA
           href="https://flourishing-cucurucho-4763d6.netlify.app/index.html"
           target="_blank"
           title="Autoparts.com"
           rel="noopener noreferrer"
         >
           DEMO
         </StyledA>
         <StyledA
           href="https://github.com/dilsah786/AutoParts"
           target="_blank"
           title="Autoparts"
           rel="noopener noreferrer"
         >
           CODE
         </StyledA>
       </AnchorDiv>
     </TextDiv>
   </ProjectDiv>
 </StyledDiv>
);
};

export { Projects };
