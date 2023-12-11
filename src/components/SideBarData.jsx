import Styled from "styled-components";
import {CloseBtn} from "./Icon.jsx";
import {Link} from "react-scroll";

const StyledDiv = Styled.div`
   background : rgba(0 ,0 , 0 , 0.9);
   width : 60%;
   position : fixed;
   right : ${(props) => (props.click === "true"?"0":"-100%")};
    transition : all 0.6s ease-in-out;
   top : 0;
   color : white;
   height : 600px;
   z-index : 10;

   @media (min-width : 768px) {
       display : none;
   }

  

`

const StyledLink = Styled(Link)`
  display : block;
margin-left : 20%;
padding : 30px;
font-size : 20px;
`

const SideBarMenuData = [
    {
      title: "Home",
      path: "home",
      id: 1,
    },
  
    {
      title: "About",
      path: "about",
      id: 2,
    },
    {
      title: "Skills",
      path: "skill",
      id: 3,
    },
    {
      title: "Projects",
      path: "project",
      id: 4,
    },
    {
      title: "Contact",
      path: "contact",
      id: 5,
    },
    {
      title: "Resume",
      path: "resume",
      id: 6,
    },
  ];
  
  export const SideBarData = ({ handleClick, click }) => {
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
  
    console.log(click);
    return (
      <StyledDiv click={click.toString()}>
        <div
          style={{
            width: "40px",
            margin: "auto",
            marginLeft: "25%",
            marginTop: "20px",
          }}
          onClick={handleClick}
        >
          <CloseBtn />
        </div>
        {SideBarMenuData.map((item) => (
          <StyledLink
            key={item.id}
            to={item.path}
            onClick={item.path === "resume" && downloadResume}
            spy={true}
            smooth={true}
            offset={60}
            duration={700}
          >
            {item.title}
          </StyledLink>
        ))}
      </StyledDiv>
    );
  };
  