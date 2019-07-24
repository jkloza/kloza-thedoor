import React, { Component } from 'react'

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 0
    }
  }

  render() {
    const languages = [ "Hello", "Bonjour", "Hola", "Ciao", "Kia Ora" ]

    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    }

    return (
      <div>
        <p style={{fontFamily: 'Satisfy', fontSize: 72, margin:0, marginLeft: 10, textShadow: '3px 3px #f0f0f0'}}>{languages[getRandomInt(0, 5)]}!</p>
      </div>
    )
  }
}
