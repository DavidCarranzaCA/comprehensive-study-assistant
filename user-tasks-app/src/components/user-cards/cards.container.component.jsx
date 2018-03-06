import React from 'react'
import userService from '../../services/user-cards.service'
import UserCard from './user.card.component.jsx'
import { Row, Col, Input, Card, Button } from 'react-materialize'

class UserCards extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            userCards: [],
            userInput: {
                title: '',
                note: ''
            }
        }
    }

    componentDidMount() {
        this.retriveInfo()
    }

    retriveInfo() {
        userService.getAll()
            .then(result => {
                if (result && result.items) {
                    this.setState({
                        userCards: result.items
                    })
                }
            })
            .catch(e => console.log(e))
    }

    onInputChange = e => {
        this.setState({
            userInput: {
                ...this.state.userInput,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.userInput) {
            userService.createUser(this.state.userInput)
                .then(response => {
                    if (response) {
                        this.retriveInfo()
                        this.setState({
                            userInput: {
                                title: '',
                                note: ''
                            }
                        })
                    }
                })
                .catch(err => console.log(err))

        }
    }

    onDelete = id => {
        userService.deleteUser(id)
            .then(() => {
                this.setState(prevState => {
                    const deletedCards = prevState.userCards.filter(item => {
                        return item._id !== id
                    });

                    return { userCards: deletedCards }
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <div className="container">
                <Row>
                    <Col s={12}>
                        <Card title="New Note" style={{ height: '350px' }}>
                            <Input s={12} label="Title" type="text" name="title" onChange={e => this.onInputChange(e)} value={this.state.userInput.title} />
                            <Input s={12} type="textarea" name="note" onChange={e => this.onInputChange(e)} label="Note" value={this.state.userInput.note} />

                            <Button onClick={e => this.onSubmit(e)}
                                floating
                                large
                                className='red right'
                                waves='light'
                                icon='add'
                            >
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <UserCard
                        onChange={this.state.userCards}
                        onDelete={this.onDelete}
                    />
                </Row>
            </div>

        )
    }
}


export default UserCards