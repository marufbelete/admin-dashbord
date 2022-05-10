// import React,{useState,useRef} from 'react';
// import { Row, Col, Card, Table } from 'react-bootstrap';
// import MaterialTable from "material-table";
// import {tableIcons} from './Tableicon'
// import { DetailMain,Img,ImageContainer, DetailSub, DetailTitle,StyledCloudUploadIcon } from "../../styled/shipmentdetal.styled";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
// export default function Profile() {
//   const img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqj4g_kSPWDcvOTZTmelBbX6Id6OvZ6VjPQ&usqp=CAU'
//   const fileref=useRef()
//   const history=useHistory()
//   const params=useParams()
//   const [valName, setValName] = useState(0);
//   const [valRole, setValRole] = useState(0);
//   const [valPhone, setValPhone] = useState(0);
//   const [valLocation, setValLocation] = useState(0);
//   const phone='0945913839'
//   const isSidebarOpen=useSelector(state=>state.sidebar.isSideBarOpen)
//   const SubmitHandler=()=>{
// history.push('/shipments')
//   }
//   const ImportImage=()=>{

//   }
// const InputHandler=(event)=>{
// const data=event.target.value
//   }
//   return(
//     <ProfileMain isopen={isSidebarOpen}>
//     <DetailMain>
//     <DetailSub>
//        <DetailTitle>Shipment Detail</DetailTitle>
//       </DetailSub>
//          <DetailSub>
//       <InputContainerProfile shipdetail>
//       <InputFiledProfile
// 				type='text' 
// 				placeholder='Pickup Date'
// 				variant='outlined'
// 			/>
//       </InputContainerProfile>
//       <InputContainerProfile shipdetail>
//        <InputFiledProfile 
// 				type='text' 
// 				placeholder='customer Id'
//         value={phone}
//         onChange={InputHandler}
// 				variant='outlined'
				
// 			/> 
//       </InputContainerProfile>
//       </DetailSub>
//       <DetailSub>
//       <InputContainerProfile shipdetail>
//       <InputFiledProfile
// 				type='text' 
// 				placeholder='Pickup Date'
// 				variant='outlined'
// 			/>
//       </InputContainerProfile>
//       <InputContainerProfile shipdetail>
//        <InputFiledProfile 
// 				type='text' 
// 				placeholder='customer Id'
//         value={phone}
//         onChange={InputHandler}
// 				variant='outlined'
			
// 			/> 
//       </InputContainerProfile>
//       </DetailSub>
//       <DetailSub>
//       <InputContainerProfile shipdetail>
//       <InputFiledProfile
// 				type='text' 
// 				placeholder='Pickup Date'
// 				variant='outlined'
// 			/>
//       </InputContainerProfile>
//       <InputContainerProfile shipdetail>
//        <InputFiledProfile 
// 				type='text' 
// 				placeholder='customer Id'
//         value={phone}
//         onChange={InputHandler}
// 				variant='outlined'
				
// 			/> 
//       </InputContainerProfile>
//       </DetailSub>
//       <DetailSub>
//       <InputContainerProfile shipdetail>
//       <InputFiledProfile
// 				type='text' 
// 				placeholder='Pickup Date'
// 				variant='outlined'
// 			/>
//       </InputContainerProfile>
//       <InputContainerProfile shipdetail>
//        <InputFiledProfile 
// 				type='text' 
// 				placeholder='customer Id'
//         value={phone}
//         onChange={InputHandler}
// 				variant='outlined'
			
// 			/> 
//       </InputContainerProfile>
//       </DetailSub>
//       <DetailSub >
//       <ImageContainer>
//         <Img src={img} alt=" Proof Document"/>
//        <span>Proof Document</span>
//       </ImageContainer>
//       </DetailSub>
//       <DetailSub final>
//       <FileInput ref={fileref} type="file"/>
//       <StyledCloudUploadIcon manual onClick={()=>fileref.current.click()}/> 
//       </DetailSub>
//       <StyledButton shipdetail
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               onClick={SubmitHandler}>
//               Edit Detail
//              {/* {state.status!=='pending'?"Change Info" :<CircularProgress color='secondary' size={18}/>} */}
//       </StyledButton>
//       </DetailMain>
//       </ProfileMain>
//   )
// }





