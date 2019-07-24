import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class CharacterButton extends Component{
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" >
          Friend
        </Button>
      </div>
    )
  }
}
