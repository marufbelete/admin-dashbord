import React, { useRef, useState } from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select, { SelectChangeEvent } from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import FormControls from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import CircularProgress from "@material-ui/core/CircularProgress";
import Buttons from "@material-ui/core/Button";
import { useDispatch } from 'react-redux';
import { loadingActions } from '../../store/loading-slice';
const FormsElements = () => {
    const dispatch=useDispatch()
   const [value,setValue]= useState()
   const usernameref=useRef()
   const passwordref=useRef()
   const confirmpasswordref=useRef()
   const roleref=useRef()
   const hubref=useRef()
const AdduserHandler=()=>{
if(usernameref.trim()&&passwordref.trim()&&confirmpasswordref.trim()&&roleref.trim()&&hubref.trim())
{
    dispatch(loadingActions.status('pending'))
    
}
    }


    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Add User</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                        <Form.Group style={{marginBottom:'30px'}} controlId="formBasicEmail">
                                        <TextField
                                            type='text' 
                                            variant='outlined'
                                            label="User name"
                                            ref={usernameref}
                                            fullWidth
                                            required
                                        /><div
                                        style={{position:'absolute',
                                            display:'inline-flex',
                                            right:'22px',
                                            top:'15px',
                                            color:'#038FCF'}}><PersonIcon/></div>
                                        </Form.Group>
                                        <Form.Group style={{marginBottom:'30px'}} controlId="formBasicPassword">
                                        <TextField
                                            type='password' 
                                            variant='outlined'
                                            label="Password"
                                            ref={passwordref}
                                            required
                                            fullWidth
                                        /><div
                                        style={{position:'absolute',
                                            display:'inline-flex',
                                            right:'22px',
                                            top:'100px',
                                            color:'#038FCF'}}><EnhancedEncryptionIcon/></div>
                                        </Form.Group>
                                        <Form.Group style={{marginBottom:'30px'}} controlId="formBasicPassword">
                                        <TextField
                                            type='password' 
                                            ref={confirmpasswordref}
                                            variant='outlined'
                                            label="Confirm password"
                                            fullWidth
                                            required
                                        /><div
                                        style={{position:'absolute',
                                            display:'inline-flex',
                                            right:'22px',
                                            top:'187px',
                                            color:'#038FCF'}}><EnhancedEncryptionIcon/></div>
                                        </Form.Group>                                   
                                </Col>
                                <Col md={6}>
                                <Form.Group style={{marginBottom:'30px'}} controlId="formBasicPassword">
                                <TextField
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    select // tell TextField to render select
                                    label="Role type"
                                    ref={roleref}
                                    variant='outlined'
                                    fullWidth
                                    required
                                    >
                                    <MenuItem key={1243} value="12345">
                                    Admin
                                    </MenuItem>
                                    <MenuItem key={1243} value="1254">
                                    Admin1
                                    </MenuItem>
                                    <MenuItem key={1542} value="1111">
                                    Driver
                                    </MenuItem>
                                    </TextField><div
                                        style={{position:'absolute',
                                            display:'inline-flex',
                                            right:'22px',
                                            top:'15px',
                                            color:'#038FCF'}}><WorkIcon/></div>
                                        </Form.Group>
                                        <Form.Group style={{marginBottom:'30px'}} controlId="formBasicPassword">
                                        <TextField
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    select // tell TextField to render select
                                    label="Hub id"
                                    ref={hubref}
                                    variant='outlined'
                                    fullWidth
                                    required
                                    >
                                        
                                    <MenuItem key={1} value="273">
                                    2731
                                    </MenuItem>
                                    <MenuItem key={2} value="4653">
                                    4653
                                    </MenuItem>
                                    <MenuItem key={3} value="5653">
                                    5653
                                    </MenuItem>
                                    </TextField><div
                                        style={{position:'absolute',
                                            display:'inline-flex',
                                            right:'22px',
                                            top:'100px',
                                            color:'#038FCF'}}><DeviceHubIcon/></div>
                                        </Form.Group>
                                   
                                </Col>
                                <Col style={{paddingBottom:'20px'}}>
                                <Buttons   
                                onClick={AdduserHandler}
                                type="submit"
                                variant="contained"
                                color="primary">
                                {'pendin'!=='pending'?"Add user" :<CircularProgress color='secondary' size={18}/>}
                           </Buttons>

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormsElements;
