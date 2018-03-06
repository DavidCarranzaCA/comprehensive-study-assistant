import React from 'react'
import { Col, Card, Button } from 'react-materialize'

class UserCard extends React.PureComponent {

    render() {
        const newCards = this.props.onChange ? this.props.onChange.map(cardItems => {
            return (
                <Col s={12} m={4} key={cardItems._id}>
                    <Card title={cardItems.title} style={{height: '225px'}}>
                        <h6><em>Answer</em>:</h6>
                        <p>{cardItems.note}</p>
                        <br />
                        <br />
                        <Button onClick={e => this.props.onDelete(cardItems._id)} 
                        floating 
                        style={{ marginLeft: " 5px" }} 
                        className='red right' 
                        waves="light" 
                        icon="delete">
                        </Button>
                    </Card>
                </Col>
            )
        }) : <div><h1>Hello</h1></div>
        return (
            <React.Fragment>

            { newCards }

            </React.Fragment>
        )
    }
}

export default UserCard