import React,{useState} from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import MaterialTable from "material-table";
import {tableIcons} from './Tableicon'

export default function Warehouse() {
  
const ImportImage=()=>{

}
  const [columns, setColumns] = useState([
    {title: "id", field: "id", hidden: true},
    { title: 'Warehouse ID', field: 'warehouseid' },
    { title: 'Country', field: 'country', initialEditValue: 'initial edit value' },
    { title: 'City', field: 'city', type: 'numeric' },
    { title: 'Exact Location', field: 'location', type: 'numeric' },
    { title: 'Cutt-Off Type', field: 'ctype',lookup: { "auto": 'Auto', 'manual': 'Manual' }, },
    { title: 'Cutt-Off Time', field: 'ctime', type: 'numeric' },
    { title: 'Contact Person', field: 'contactperson', type: 'numeric' },
    { title: 'Contact Phone', field: 'contactphone', type: 'numeric' },
    { title: 'Alternative Contact', field: 'alternativecontact', type: 'numeric' },
  ]);

  const [data, setData] = useState([
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'manual',ctime:2,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'manual',ctime:4,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
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
      title="Warehouse"
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





