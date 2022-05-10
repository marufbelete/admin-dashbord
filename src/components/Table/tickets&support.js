import MaterialTable from "material-table";
import {tableIcons} from '../../reusable/tableicon'
import {useState} from 'react';
import {TableContainer} from "../../styled/table.styled";
import {MainContainter} from '../../styled/report.styled';
import { useSelector } from "react-redux";
export default function TicketAndSupport() {
  const isSidebarOpen=useSelector(state=>state.sidebar.isSideBarOpen)
  const [columns, setColumns] = useState([
    {title: "id", field: "id", hidden: true},
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
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
    <TableContainer open={isSidebarOpen}>
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





