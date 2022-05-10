import React,{useState} from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import MaterialTable from "material-table";
import {tableIcons} from './Tableicon'
const ShipmentTable = () => {
    const [columns, setColumns] = useState([
        {title: "id", field: "id", hidden: true},
        { title: 'Pickip Date', field: 'pickdate',type:'date' },
        // { title: 'Prof Doc', field: 'proof',editable: 'always'},
        { title: 'Customer Id', field: 'customerid', initialEditValue: 'initial edit value' },
        { title: 'Location', field: 'location', type: 'numeric' },
        { title: 'Org.Delivery Date', field: 'orgdate', type: 'date' },
        // { title: 'Actual Received Date', field: 'ardate', type: 'date' },
      
      ]);
      const [data, setData] = useState([
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
        {id: 1, pickdate: '2022-03-01', customerid: 'Talal',location:'12345',orgdate:'2022-03-04',ardate:'2022-03-03'},
    
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
      title="All Shipment"
      columns={columns}
      data={data}
      icons={tableIcons}
      options={{
        actionsColumnIndex: -1
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
    );
};


export default ShipmentTable