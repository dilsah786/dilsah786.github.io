
 import Styled from "styled-components";

 const StyledDiv = Styled.div`
      display : flex;
      width : 50%;
      margin : auto;
      justify-content : space-between;

      @media (max-width : 600px) {
            width : 80%;
        }

        @media (max-width : 400px) {
            width : 100%;
        }

      &>div{
        width : 60px;
      }

      &>div img{
        width : 100%;
      }

      &>div p{
        font-size : 14px;
        text-align : center;
      }

 `

const Hcj = () => {
      return(
           <StyledDiv>
                           <div>
                                   <div>
                                         <img alt = "html5" src = {"html5.png"}/>
                                   </div>
                                   <p>HTML5</p>
                            </div>

                            <div>
                                   <div>
                                         <img alt = "css3" src = {"css3.png"}/>
                                   </div>
                                   <p>CSS3</p>
                            </div>

                            <div>
                                   <div>
                                         <img alt = "javascript" src = {"javascript.png"}/>
                                   </div>
                                   <p>JAVASCRIPT</p>
                            </div>

           </StyledDiv>
      )
}

export {Hcj};