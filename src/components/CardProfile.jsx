import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

class CardProfile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card style={{ width: '40%', margin: 'auto' }}>
                <Card.Img variant="top" src={this.props.srcImg} />
                <Card.Body>
                    <h3 style={{ color: 'blue', textAlign: 'left', fontWeight: 'bold', fontSize: "24" }}>My Profile : </h3>
                    <Card.Text style={{ color: 'blue', textAlign: 'left', fontSize: "18" }}>
                        <p><span style={{ fontWeight: 'bold', color: "brown" }}>Full Name : </span>{this.props.nom}</p>
                        <p><span style={{ fontWeight: 'bold', color: "brown" }}>Bio : </span>{this.props.bio}</p>
                        <p><span style={{ fontWeight: 'bold', color: "brown" }}>Profession : </span>{this.props.prof}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default CardProfile;