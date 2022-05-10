import React,{useState,useRef} from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import MaterialTable from "material-table";
import {tableIcons} from './Tableicon'

export default function Drivers() {
 const [password,setPassword]= useState(false)
 const [confirmPassword,setConfirmPassword]= useState(true)
const fileref=useRef()
const ImportImage=()=>{

}
  const [columns, setColumns] = useState([
    {title: "id", field: "id", hidden: true},
    { title: 'Full Name', field: 'name' },
    { title: 'Email', field: 'email'},
    { title: 'Phone Number', field: 'phone', type: 'numeric' },
    { title: 'Type', field: 'type',lookup: { 'full time': 'Full-Time', 'part time': 'Part Time' }},
    { title: 'Linked To', field: 'linkedto',lookup: { 'warehouse': 'Warehouse', 'hub': 'Hub','sorting facility':'Sorting Facility' } },
    { title: 'Shift', field: 'shift', type: 'numeric' },
    { title: 'Priority', field: 'priority', type: 'numeric' },
  ]);

  const [data, setData] = useState([
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367, type:'full time',linkedto:'hub',shift:'night',priority:1 },

  ]);

  return (
    <React.Fragment>
    <Row>
        <Col>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Shipment</Card.Title>
                    
                </Card.Header>
                <Card.Body>
                <MaterialTable
                 components={{
                  Container: props => <div {...props} elevation={0}/>
             }}
                 responsive
      title="Driver"
      columns={columns}
      data={data}
      icons={tableIcons}
      options={{
        actionsColumnIndex: -1,
        exportButton:true,
        columnsButton:true
      }}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
     </Card.Body>
        </Card>
        </Col>
         </Row>
        </React.Fragment>
  )
}





