import React from 'react';
import { Card, Row, Col,Button, Alert  } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useScriptRef from '../../../hooks/useScriptRef';
import { API_SERVER } from '../../../config/constant';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const Reset = () => {
    let history = useHistory();
    const scriptedRef = useScriptRef();
    const BackLoginHandler=()=>{
        history.push('/signin')
    }
   

    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="borderless">
                        <Row className="align-items-center">
                            <Col>
                                <Card.Body className="text-center">
                                    <h4 className="mb-4">Admin Dashboard</h4>

                                    <div className="mb-4">
                                        <i className="feather icon-user-plus auth-icon" />
                                    </div>

                                    <form >
                        <div className="form-group mb-3">
                            <input
                                className="form-control"
                                // error={touched.email && errors.email}
                                label="New Password"
                                placeholder="New Paaword"
                                name="newpassword"
                                // onBlur={handleBlur}
                                // onChange={handleChange}
                                type="password"
                                // value={values.email}
                            />
                            {/* { errors.username && <small className="text-danger form-text">{errors.username}</small>} */}
                        </div>
                        <div className="form-group mb-3">
                            <input
                                className="form-control"
                                // error={touched.email && errors.email}
                                label="COnfirm Password"
                                placeholder="Confirm password"
                                name="confirmpassword"
                                // onBlur={handleBlur}
                                // onChange={handleChange}
                                type="password"
                                // value={values.email}
                            />
                            {/* { errors.username && <small className="text-danger form-text">{errors.username}</small>} */}
                        </div>
                        

                        {/* {errors.submit && (
                            <Col sm={12}>
                                <Alert variant="danger">{errors.submit}</Alert>
                            </Col>
                        )} */}

                        <Row>
                            <Col mt={2}>
                                <Button
                                    className="btn-block"
                                    color="primary"
                                    // disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="primary"
                                    onClick={BackLoginHandler}
                                >
                                   Confirm
                                </Button>
                            </Col>
                        </Row>
                    </form>
            <hr />

                                    

                                    <br />

                                    <p className="mb-0 text-muted">
                                        &copy;{' '}
                                        <a target="_blank" rel="noreferrer">
                                    Shipping
                                </a>
                                -{' '}
                                <a  rel="noreferrer">
                                    Dashboard
                                </a>
                                        .
                                    </p>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Reset;
