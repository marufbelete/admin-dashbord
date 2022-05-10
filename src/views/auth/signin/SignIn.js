import React from 'react';
import { Card,Col ,Row,Button} from 'react-bootstrap';
import { NavLink ,Link, useHistory} from 'react-router-dom';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const Signin = () => {
const history = useHistory()
    const LoginHandler=()=>{
        history.push('/dashboard')
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
                    <Card className="borderless text-center">
                        <Card.Body>
                            <h4 className="mb-4">Admin Dashboard</h4>

                            <div className="mb-4">
                                <i className="feather icon-unlock auth-icon" />
                            </div>

                               
                {/* {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => ( */}
                    <form>
                        <div className="form-group mb-3">
                            <input
                                className="form-control"
                                // error={touched.email && errors.email}
                                label="Email Address"
                                placeholder="Email Address"
                                name="email"
                                // onBlur={handleBlur}
                                // onChange={handleChange}
                                type="email"
                                // value={values.email}
                            />
                            {/* {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>} */}
                        </div>
                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                // error={touched.password && errors.password}
                                label="Password"
                                placeholder="Password"
                                name="password"
                                // onBlur={handleBlur}
                                // onChange={handleChange}
                                type="password"
                                // value={values.password}
                            />
                            {/* {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>} */}
                        </div>

                        {/* {errors.submit && (
                            <Col sm={12}>
                                <Alert variant="danger">{errors.submit}</Alert>
                            </Col>
                        )} */}

                        <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Rember me.
                            </label>
                        </div>

                        <Row>
                            <Col mt={2}>
                                <Button
                                    className="btn-block"
                                    color="primary"
                                    // disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="primary"
                                >
                                   <Link to='#' onClick={LoginHandler}>Sign IN</Link> 
                                </Button>
                            </Col>
                        </Row>
                    </form>
             
            <hr />

                            <p className="mb-0 text-muted">
                                Forgot password?{' '}
                                <NavLink to="/forgotpassword" className="f-w-400">
                                    Forgot
                                </NavLink>
                            </p>

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
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signin;
