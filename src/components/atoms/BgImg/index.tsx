import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  height:100%;
  width:100%;
  background-color: transparent;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display:block;
`
const BgImg = (props:{img:string}) => {

  const styles = {
    container: {
      backgroundImage:`url( ${props.img} )`,
    } as React.CSSProperties,
  };

  return (
    <Container style={styles.container} className='img'/>
  );
};

export default BgImg;
