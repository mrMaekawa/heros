import React from 'react'
import { Container } from './styles'

export default function Card(props:{nameChar:string, imgChar:string}) {

  const styles = {
    container: {
      backgroundImage:`url( ${props.imgChar} )`,
    } as React.CSSProperties,
  };

  return (
    <Container >
      <section style={styles.container}/>
      <label>
        <span>{ props.nameChar }</span>
      </label>
    </Container>
  )

}
