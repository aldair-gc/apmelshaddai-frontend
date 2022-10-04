import styled from "styled-components";

export const LoadingContainer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;
z-index: 5;

i {
  font-size: 40px;
  color: #fff;
  animation: 1s infinite normal spin;
  animation-timing-function: linear;
}

@keyframes spin {
  from {rotate: 0deg;}
  to {rotate: 360deg;}
}

`;
