import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Conter() {
    let [state,setState]=useState({
        count:0
    });
    let incr=()=>{
        setState({
            count:state.count+1
        });
    };
    let decr=()=>{
        setState({
            count:state.count-1
        });
    };
    return (    
            <Container className="mt-3">
                <Row>
                    <Col xs={4}>
                      <Card className="shadow-lg">
                        <Card.Body >
                            <p className="display-2">{state.count}</p>
                            <Button onClick={incr} variant="success" className="m-1">Icrement</Button>
                            <Button  onClick={decr} variant='warning' className="m-1">Decrement</Button>
                        </Card.Body>
                      </Card>
                    </Col>                   
                </Row>
            </Container>
    

    );
}
export default Conter;