import MaterialTable from "material-table";
import {tableIcons} from '../../reusable/tableicon'
import {useState,useRef} from 'react';
import {TableContainer} from "../../styled/table.styled";
import {MainContainter} from '../../styled/report.styled';
import { useSelector } from "react-redux";
import { StyledCloudUploadIcon,FileInput } from "../../styled/main.styled";
export default function CODBalance() {
  const isSidebarOpen=useSelector(state=>state.sidebar.isSideBarOpen)
  const fileref=useRef()
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
    <TableContainer open={isSidebarOpen}>
        <FileInput ref={fileref} type="file" onChange={ImportImage}/>
      <StyledCloudUploadIcon cod onClick={()=>fileref.current.click()}/>
    <MaterialTable
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
    </TableContainer>
  )
}





