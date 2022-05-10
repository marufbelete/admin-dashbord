import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

const BootstrapTable = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={8} xl={6} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic Table</Card.Title>
                            <span className="d-block m-t-5">
                                use bootstrap <code>Table</code> component
                            </span>
                        </Card.Header>
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8} xl={6} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic Table</Card.Title>
                            <span className="d-block m-t-5">
                                use bootstrap <code>Table</code> component
                            </span>
                        </Card.Header>
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BootstrapTable;
