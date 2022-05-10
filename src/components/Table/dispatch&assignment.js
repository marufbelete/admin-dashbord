import React,{useState,useRef} from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import MaterialTable from "material-table";
import {tableIcons} from './Tableicon'
export default function DispatchAssignment() {
  const [columns, setColumns] = useState([
    {title: "id", field: "id", hidden: true},
    { title: 'Recived Info', field: 'reciveinfo' },
    { title: 'Pickedup Info', field: 'pickedup', initialEditValue: 'initial edit value' },
    { title: 'Available', field: 'available', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ]);

  const [data, setData] = useState([
    {id: 1, name: 'said', surname: 'murad', birthYear: 2017, birthCity: 34 },
    {id: 2, name: 'abebe', surname: 'teshome', birthYear: 1987, birthCity: 63 },
    {id: 3, name: 'anteneh', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    {id: 4, name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    {id: 5, name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    {id: 6, name: 'madi', surname: 'hasen', birthYear: 1987, birthCity: 63 },
    {id: 7, name: 'maruf', surname: 'elis', birthYear: 1987, birthCity: 63 },
    {id: 8, name: 'Zerya', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);

  return (
    <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic Table</Card.Title>
                            <span className="d-block m-t-5">
                                use bootstrap <code>Table</code> component
                            </span>
                        </Card.Header>
                        <Card.Body>
                        <MaterialTable
                         components={{
                          Container: props => <div {...props} elevation={0}/>
                     }}
                         responsive
      title="Dispatch And Assignment"
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





