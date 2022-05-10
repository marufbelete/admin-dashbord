import React,{useRef} from 'react';
import { Row, Col, Card, Table,Button } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import TextField from "@material-ui/core/TextField";
import PublishIcon from '@material-ui/icons/Publish';
import Avatar from '@material-ui/core/Avatar';


const TicketDetail = () => {
    const fileref=useRef()
    return (
        <React.Fragment>
            <Row >
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Ticket</Card.Title>
                            <span className="d-block m-t-5">
                            </span>
                        </Card.Header>
                        <Card.Body>
                        <Col style={{fontSize:'20px',marginBottom:'20px'}}>Account Detail</Col>

                            <Row >
                          <Col style={{marginBottom:'20px', marginLeft:'10px'}}>
                              <PersonIcon/><span style={{verticalAlign:'middle',paddingLeft:'7px',fontWeight:'bold'}}>marufbelete</span></Col>
                            
                          <Col style={{marginBottom:'20px', marginLeft:'10px'}}>
                          <WorkIcon/><span style={{verticalAlign:'middle',paddingLeft:'7px',fontWeight:'bold'}}>Driver</span></Col>
                          <Col style={{marginBottom:'20px', marginLeft:'10px'}}>
                          <DeviceHubIcon/><span style={{verticalAlign:'middle',paddingLeft:'7px',fontWeight:'bold'}}>23412</span></Col>
                          </Row>
                          <Col style={{fontSize:'20px',marginBottom:'20px'}}>Contact Detail</Col>

                          <Row>
                          <Col style={{marginBottom:'20px',marginLeft:'10px'}}>
                          <LocalPhoneIcon/><span style={{verticalAlign:'middle',paddingLeft:'7px',fontWeight:'bold'}}>0945913839</span></Col>
                          <Col style={{marginBottom:'20px',marginLeft:'10px'}}>
                          <MailIcon/><span style={{verticalAlign:'middle',paddingLeft:'7px',fontWeight:'bold'}}>beletemaruf@gmail.com</span></Col>
                          <Col style={{marginBottom:'20px',marginLeft:'10px'}}>
                          <LocationOnIcon/><span style={{verticalAlign:'middle',paddingLeft:'7px',fontWeight:'bold'}}>22 st</span></Col>
                          </Row>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </React.Fragment>
    );
};

export default TicketDetail;



   
// import { useEffect,useRef, useState } from 'react';
// import { motion,animate} from 'framer-motion';
// import { ReportCanvas } from '../styled/report.styled';
// import { animatinoA } from '../animation/animation';
// import {CounterStyle,Plus} from '../styled/report.styled'
// export default function Counter({count}) {
//   const [done,setDone] =useState(false)
//     const ref = useRef();
//     useEffect(() => {
//       const controls = animate(count.from, count.to, {
//         duration: 5,
//         onUpdate(value) {
//           ref.current.textContent = value.toFixed(0);
//         }
//       });
//       setTimeout(function(){setDone(true)},5000)
//       return () => controls.stop()
      
//     }, [count.from, count.to]);
//     return(
//       <>
//           <ReportCanvas as={motion.div}
//           variants={animatinoA}
//           initial="from"
//           animate="to"
//           whileHover="hover">
//               <CounterStyle ref={ref}> </CounterStyle>{done&&<Plus>+</Plus>}
//       </ReportCanvas>
//       </>
//   )
   
//   }