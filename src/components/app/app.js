import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import { Button } from 'reactstrap';
import "./app.css";


export default class App extends React.Component {

state ={
    randomItem: false
}

onClickRandom = () => {
    console.log(this.state.randomItem);
    this.setState({randomItem : !this.state.randomItem})
}

    render() {

        const random = !this.state.randomItem ? <RandomChar/> : "";

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        
                        <Col lg={{size: 6, offset: 0}} className="randomItems">
                        <Button color="secondary"
                            onClick={this.onClickRandom}> 
                            randomClick</Button>
                            {random}    
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

;