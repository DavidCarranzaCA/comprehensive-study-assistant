import React from 'react'
import { Row, Col, Preloader } from 'react-materialize'


class PreloaderSpinner extends React.PureComponent {

    render() {
        return (
            <Row style={{position: "Fixed", top: '40%', left: '47%'}} >
                <Col s={12} >
                    <Preloader
                    size="big" 
                    flashing />
                </Col>
            </Row>
        )
    }
}

export default PreloaderSpinner