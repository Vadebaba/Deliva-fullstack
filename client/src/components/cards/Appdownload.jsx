// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from "styled-components";
import playstore from "../../utils/Images/play_store.png";
import appstore from "../../utils/Images/app_store.png";


const Appdownload = styled.div`
    margin: auto auto;
    margin-top: 100px;
    font-size: max(3vw,20px);
    text-align: center;
    font-weight: 500;
`

const Platforms = styled.div`
    display: flex;
    justify-content: center;
    gap: max(2vw, 10px);
    margin-top: 40px;

`

const PlayImg = styled.img`
  cursor:pointer;

   &:hover {
    transform: scale(1.05);
    transition: ease-in-out 0.5s;
  }
`
const AppImg = styled.img`
  cursor:pointer; 

   &:hover {
   transform: scale(1.05);
    transition: ease-in-out 0.5s;
  }
`








const AppDownload = () => {


    return (
        <Appdownload id='app-download'>
            <p>For Better Experience Download  <br /> Deliva App </p>
            <Platforms>
                <PlayImg src={playstore} alt="play_store" />
                <AppImg src={appstore} alt="app_store" />
            </Platforms>
        </Appdownload>
    )
}

export default AppDownload;
