import React,{useState,useRef} from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import MaterialTable from "material-table";
import {tableIcons} from './Tableicon'

export default function Customer() {
  const fileref=useRef()
  const img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqj4g_kSPWDcvOTZTmelBbX6Id6OvZ6VjPQ&usqp=CAU'
  const ImportImage=()=>{
  
  }
  const [columns, setColumns] = useState([
    {title: "id", field: "id", hidden: true},
    { title: 'Customer Id', field: 'customerid' },
    { title: 'Name', field: 'name'},
    { title: 'Contact Person', field: 'cperson'},
    { title: 'Phone Number', field: 'phone'},
    { title: 'Pickup Location', field: 'location'},
  ]);

  const [data, setData] = useState([
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},
        {id: 1,customerid:'081723', name: 'Said Barly',cperson:'Hassen', phone: '0945913839', location:'Riyad'},


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
      title="All Customers"
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





