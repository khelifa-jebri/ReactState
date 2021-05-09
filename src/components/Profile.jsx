import React, { Component } from 'react'
import CardProfile from './CardProfile.jsx'

class Profile extends Component {
  constructor() {
    console.log("constructor()")
    super();
    this.state = {
      person: {
        fullName: "Khalifa Jabri",
        bio: "I'm a develloper React",
        imgSrc: "/imgProfile.jpg",
        profession: "Student"
      },
      intervall: null,
      timer: 0
    }
  }

  componentDidMount() {
    console.log("componentDidMount()")
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  componentDidUpdate() {
    console.log("componentDidMount()");
  }

  componentWillUnmount() {
    console.log("componentDidMount()")
    clearInterval(this.state.intervall)
  }

  render() {
    console.log("render()")
    return (
      <div style={{ margin: '2%' }}>
        <h4 style={{color : "red"}}>TIMER : {this.state.timer}</h4>
        <CardProfile srcImg={this.state.person.imgSrc} nom={this.state.person.fullName} bio={this.state.person.bio} prof={this.state.person.profession} />
      </div>
    )
  }
}

export default Profile;
