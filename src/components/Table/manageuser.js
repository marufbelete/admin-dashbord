import React,{useState} from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import MaterialTable from "material-table";
import {tableIcons} from './Tableicon'
import { useHistory } from 'react-router-dom';
export default function ManageUser() {
  const history=useHistory();
  const [columns, setColumns] = useState([
    {title: "id", field: "id", hidden: true},
    { title: 'Full Name', field: 'name' },
    { title: 'Email Address', field: 'email' },
    { title: 'Role', field: 'role' ,lookup: { 3421: 'Admin', 6123: 'Driver'}},
    {
      title: 'Hub Id',field: 'hubid',
      lookup: { 3421: '3421', 6123: '6123' },
    },
    { title: 'Address', field: 'address' },

  ]);

  const [data, setData] = useState([
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 3421, hubid: 3421,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 3421, hubid: 3421,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 3421, hubid: 3421,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 3421, hubid: 3421,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 3421, hubid: 3421,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 3421, hubid: 3421,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 6123, hubid: 6123,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 6123, hubid: 6123,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 6123, hubid: 6123,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 6123, hubid: 6123,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 6123, hubid: 6123,address:'Riyad' },
    {id: 1, name: 'said murad',email:'saleh@gmail.com', role: 6123, hubid: 6123,address:'Riyad' },

  ]);

  return (
    <React.Fragment>
    <Row>
        <Col>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Setting</Card.Title>
                    
                </Card.Header>
                <Card.Body>
                <MaterialTable
                 responsive
                 components={{
                  Container: props => <div {...props} elevation={0}/>
             }}
      title="Manage User"
      columns={columns}
      data={data}
      icons={tableIcons}
      options={{
        actionsColumnIndex: -1,
        exportButton:true,
        columnsButton:true
      }}
      actions={[
        {
          tooltip: 'Add User',
          icon:tableIcons.Add,
          iconProps: { color:'blue'},
          position:'toolbar',
          onClick: (evt, Data) => {
            history.push('/adduser')
           }
        }
      ]}
     
      editable={{
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





