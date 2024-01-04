import { keyframes } from "@emotion/react";

export const animation = keyframes`0% {
    border-radius: 81% 19% 57% 43% / 25% 56% 44% 75% 
  }
  
  50% {
    border-radius: 87% 13% 92% 8% / 17% 95% 5% 83% 
  }
  75% {
    border-radius: 74% 26% 87% 13% / 30% 70% 30% 70% 
  }
  100%{
    border-radius: 81% 19% 57% 43% / 25% 56% 44% 75% 
  }
  }`;

export const skillAnimation = keyframes`
  0% {
		transform: rotate(0deg);
  }
  25% {
		transform: rotate(-25deg);
	}
	50% {
		transform: rotate(0deg);
	}

  75%{
    transform: rotate(35deg)
  }
  100% {
		transform: rotate(0deg);
	}
  }`;

export const anotherAnimation = keyframes`
  0% {
		transform: rotate(0deg);
  }
  50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}`;
