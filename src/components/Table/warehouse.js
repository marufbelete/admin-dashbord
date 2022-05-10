import MaterialTable from "material-table";
import {tableIcons} from '../../reusable/tableicon'
import {useState,useRef} from 'react';
import {TableContainer} from "../../styled/table.styled";
import {MainContainter} from '../../styled/report.styled';
import {useSelector} from 'react-redux';
import { StyledCloudUploadIcon,FileInput } from "../../styled/main.styled";

export default function Warehouse() {
  const isSidebarOpen=useSelector(state=>state.sidebar.isSideBarOpen)
  const fileref=useRef()
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
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'manual',ctime:2,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'manual',ctime:4,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
    {id: 1, Warehouseid: '120122', country: 'Saudi',city:'Riyad',location:'21 Street',ctype:'auto',ctime:null,contactperson:'maruf',contactphone:'09463',alternativecontact:'Some one' },
  ]);

  return (
    <TableContainer open={isSidebarOpen}>
      <FileInput ref={fileref} type="file" onChange={ImportImage}/>
      <StyledCloudUploadIcon warehouse onClick={()=>fileref.current.click()}/>
    <MaterialTable
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
    </TableContainer>
  )
}





