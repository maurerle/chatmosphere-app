import { createGlobalStyle } from "styled-components"
import { ThemeType } from "../theme"

import SpaceWoff_400 from './../../assets/fonts/space-grotesk-v2/SpaceGrotesk-Regular.woff'
import SpaceWoff2_400 from './../../assets/fonts/space-grotesk-v2/SpaceGrotesk-Regular.woff2'
import SpaceTTF_400 from './../../assets/fonts/space-grotesk-v2/SpaceGrotesk-Regular.ttf'

import SpaceWoff_500 from './../../assets/fonts/space-grotesk-v2/SpaceGrotesk-Medium.woff'
import SpaceWoff2_500 from './../../assets/fonts/space-grotesk-v2/SpaceGrotesk-Medium.woff2'
import SpaceTTF_500 from './../../assets/fonts/space-grotesk-v2/SpaceGrotesk-Medium.ttf'

import SpaceWoff_700 from './../../assets/fonts/space-grotesk-v2/SpaceGrotesk-Bold.woff'
import SpaceWoff2_700 from './../../assets/fonts/space-grotesk-v2/SpaceGrotesk-Bold.woff2'
import SpaceTTF_700 from './../../assets/fonts/space-grotesk-v2/SpaceGrotesk-Bold.ttf'

import InterWoff_400 from './../../assets/fonts/inter-v7/Inter-Regular.woff'
import InterWoff2_400 from './../../assets/fonts/inter-v7/Inter-Regular.woff2'
import InterTTF_400 from './../../assets/fonts/inter-v7/inter-v7-latin-regular.ttf'


export const GlobalStyles = createGlobalStyle<{theme:ThemeType}>`

  /* roboto-regular - latin */
  @font-face {
    font-family: 'Space';
    font-style: normal;
    font-weight: 400;
    src: local('Space'),
        url(${SpaceWoff2_400}) format('woff2'), /* Super Modern Browsers */
        url(${SpaceWoff_400}) format('woff'), /* Modern Browsers */
        url(${SpaceTTF_400}) format('truetype'); /* Safari, Android, iOS */
  }
  /* roboto-500 - latin */
  @font-face {
    font-family: 'Space';
    font-style: normal;
    font-weight: 500;
    src: local('Space'),
        url(${SpaceWoff2_500}) format('woff2'), /* Super Modern Browsers */
        url(${SpaceWoff_500}) format('woff'), /* Modern Browsers */
        url(${SpaceTTF_500}) format('truetype'); /* Safari, Android, iOS */
  }
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Space';
    font-style: normal;
    font-weight: 700;
    src: local('Space'),
        url(${SpaceWoff2_700}) format('woff2'), /* Super Modern Browsers */
        url(${SpaceWoff_700}) format('woff'), /* Modern Browsers */
        url(${SpaceTTF_700}) format('truetype'); /* Safari, Android, iOS */
  }
  /* inter-400 - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: local('Inter'),
        url(${InterWoff2_400}) format('woff2'), /* Super Modern Browsers */
        url(${InterWoff_400}) format('woff'), /* Modern Browsers */
        url(${InterTTF_400}) format('truetype'); /* Safari, Android, iOS */
  }



  html, body {
    font-family: 'Space';
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.base['6']};
  }
  
  input, textarea, button {
    font-family: 'Space';
  }

  a {
    cursor: default;
  }

  .screenshare-default {
    background: none;
    width: 200px;
    max-height: 200px;
    object-position: 50% 50%;
    display: block;
  }

  .screenshare-zoom {
    background: none;
    display: block;
  }

  //outerArea
  .react-transform-component{
    width: 100vw  !important;
    height: 100vh !important;
    background-color:${props=>props.theme.bg.inset};
  }
  //inner Area
  .react-transform-element{
    background-color: ${props => props.theme.bg.default};
    cursor:grab;
    display:inline-flex;
  }
  .react-transform-element:active{
    cursor:grabbing;
  }
  #textinput{ 
    width: 100%;
    width: -moz-available;          /* For Mozzila */
    width: -webkit-fill-available;  /* For Chrome */
    width: stretch;
    background-color:rgba(23,116,203,0.2);
    border:none;
    border-radius:10px;
    margin-top:10px;
    height:clamp(3%,50px,10%);
    position:relative;
    display: inline-block;
  }

  .block-chat{
    border-radius:10px;
    display:block;
    left:0px;
    height:300px;
    width:max-content;
    backround-color:rgba(23,116,203,0.2);
    
  }
  .hide-chat{
    display:none;
  }

  .last-item{

  }

`
