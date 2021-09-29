import styled from 'styled-components'
import config from '../../../config'

export const Container = styled.div`
  width:11.616vw !important;
  height:6.566vw !important;

  @media(min-width:991px) {
    width:5.99vw !important;
    height:3.385vw !important;
  }

  .darkmode-switch{
    width:11.616vw !important;
    height:6.566vw !important;

    @media(min-width:991px) {
      width:5.99vw !important;
      height:3.385vw !important;
    }

    .react-switch-bg{
      width:11.616vw !important;
      height:6.566vw !important;
      background-color: transparent !important;
      background-position: center center !important;
      background-repeat: no-repeat !important;
      background-size: contain !important;

      @media(min-width:991px) {
        width:5.99vw !important;
        height:3.385vw !important;
      }

    }

    &.day .react-switch-bg{
      background-image: url(${config.public_url}/images/dark_mode_day_bg.svg) !important;
    }
    &.night .react-switch-bg{
      background-image: url(${config.public_url}/images/dark_mode_night_bg.svg) !important;
    }

    .react-switch-handle{
      width:4.646vw !important;
      height:4.646vw !important;
      top:0.95vw !important;
      left:1.111vw !important;
      background-color: transparent !important;
      background-position: center center !important;
      background-repeat: no-repeat !important;
      background-size: contain !important;
      transform: none !important;
      transition: background-color 0.25s ease 0s, left 0.25s ease 0s, box-shadow 0.15s ease 0s !important;
      
      @media(min-width:991px) {
        width:2.359vw !important;
        height:2.359vw !important;
        top:.469vw !important;
        left:.573vw !important;
      }
    }

    &.day .react-switch-handle{
      background-image: url(${config.public_url}/images/dark_mode_day_handle.svg) !important;
    }
    &.night .react-switch-handle{
      background-image: url(${config.public_url}/images/dark_mode_night_handle.svg) !important;
      left:5.8vw !important;

      @media(min-width:991px) {
        left:3.021vw !important;
      }
    }
  }
`