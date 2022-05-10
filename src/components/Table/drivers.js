import MaterialTable from "material-table";
import {tableIcons} from '../../reusable/tableicon'
import {useRef, useState} from 'react';
import {TableContainer} from "../../styled/table.styled";
import {MainContainter} from '../../styled/report.styled';
import { useSelector } from "react-redux";
import { StyledCloudUploadIcon,FileInput } from "../../styled/main.styled";

export default function Drivers() {
 const [password,setPassword]= useState(false)
 const [confirmPassword,setConfirmPassword]= useState(true)
  const isSidebarOpen=useSelector(state=>state.sidebar.isSideBarOpen)
const fileref=useRef()
const ImportImage=()=>{

}
  const [columns, setColumns] = useState([
    {title: "id", field: "id", hidden: true},
    { title: 'Full Name', field: 'name' },
    { title: 'Email', field: 'email'},
    { title: 'Phone Number', field: 'phone', type: 'numeric' },
    { title: 'Password', field: 'password',hidden:password, type: 'numeric' },
    { title: 'Confirm Password', field: 'confirmpassword',hidden:confirmPassword, type: 'numeric' },
    { title: 'Type', field: 'type',lookup: { 'full time': 'Full-Time', 'part time': 'Part Time' }},
    { title: 'Linked To', field: 'linkedto',lookup: { 'warehouse': 'Warehouse', 'hub': 'Hub','sorting facility':'Sorting Facility' } },
    { title: 'Shift', field: 'shift', type: 'numeric' },
    { title: 'Priority', field: 'priority', type: 'numeric' },
  ]);

  const [data, setData] = useState([
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },
    {id: 2, name: 'abebe teshome', email: 'email@gmail.com', phone: 1987367,password:'',confirmpassword:'', type:'full time',linkedto:'hub',shift:'night',priority:1 },

  ]);

  return (
    <TableContainer open={isSidebarOpen}>
      <FileInput ref={fileref} type="file" onChange={ImportImage}/>
      <StyledCloudUploadIcon onClick={()=>fileref.current.click()}/>
    <MaterialTable
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
    </TableContainer>
  )
}





