import React,{useState} from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import MaterialTable from "material-table";
import {tableIcons} from './Tableicon'
import {useHistory} from 'react-router-dom'
export default function CODBalance() {
  // const fileref=useRef()
  const history=useHistory()
const ImportImage=()=>{

}
const [columns, setColumns] = useState([
  {title: "id", field: "id", hidden: true},
  { title: 'Driver ID', field: 'driverid'},
  { title: 'Full Name', field: 'name' },
  { title: 'COD Balance', field: 'balance' },
  { title: 'Collection Status', field: 'colstatus',lookup: { '1': 'Confirmed', '0': 'Pending','-1':'Rejected' } },
 
]);

const [data, setData] = useState([
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'-1'},
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'0'},
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'1'},
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'0'},
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'1'},
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'0'},
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'0'},
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'-1'},
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'0'},
  {id: 2,driverid:'73728', name: 'abebe teshome', balance: '12312', colstatus:'-1'},

]);

  return (
    <React.Fragment>
    <Row>
        <Col>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Shipment</Card.Title>
                    <span className="d-block m-t-5">
                    </span>
                </Card.Header>
                <Card.Body>
                <MaterialTable
                 components={{
                    Container: props => <div {...props} elevation={0}/>
               }}
                 responsive
      title="COD Balance"
      columns={columns}
      data={data}
      icons={tableIcons}
      options={{
        actionsColumnIndex: -1,
        exportButton:true,
        columnsButton:true,
        selection:true
      }}
      actions={[
          {
            tooltip: 'Detail',
            icon:tableIcons.DetailPanel,
            iconProps: { color:'blue'},
            position:'row',
            onClick: (evt, Data) => {
              history.push('/coddetail/:codid')
             }
          },
          {
          tooltip: 'Remove All Selected Users',
          icon:tableIcons.Delete,
          onClick: (evt, Data) => {
            //make modal
            alert('You want to delete ' + Data.length + ' rows')
            new Promise((resolve, reject) => {
              setTimeout(() => {
                let dataDelete = [...data];
                const ids = Data.map(edata=>edata.id);
                for(let i=0;i<ids.length;i++)
                {
                  dataDelete=dataDelete.filter(e=>e.id!==ids[i])
                }  
                setData([...dataDelete]);
                resolve();
              }, 1000)
            })
          }
        }
      ]}
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





