import {useEffect, useState, useCallback} from 'react'
import Header from './Header'
import './style.css'
import { DataGrid, GridActionsCellItem  } from '@mui/x-data-grid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import fetchData from './services';
import ModalDetail from './Detail';

const Home = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [paramId, setParamId] = useState();
  const [query, setQuery] = useState();


  const getTitle = (data) => {
    if(data) {
      return data.value.english
      // console.log(data.value.english)
    }
  }

  const handleOpen = useCallback(
    (id) =>  () => {
      setOpen(true);
      setParamId(id)      
    });

  const columns = [
    {   
      field: 'id', 
      headerName: 'ID', 
      width: 150,
      headerAlign : 'center',
      align: 'center'
    },
    { 
      field: 'title',
      headerName: 'Title', 
      width: 400,
      valueGetter: getTitle
    },
    { field: 'type', headerName: 'Type',width: 200  },
    {
      field: 'actions',
      headerName: 'Action',
      type: 'actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<InfoOutlinedIcon />}
          label="detail"
          onClick={handleOpen(params.id)}
        >
        </GridActionsCellItem>
        
      ],
    }
  ];

  useEffect (() => {
    fetchData({setData, paramId, query});
    // console.log("tes data", data )
  },[paramId, query])
  

  return ( 
    <>
      <Header/>
      <div className="container">
        <div className='section-search'>
          <input 
            className="search"
            placeholder="Search by Id"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
        <div className='section-table'>
          <div style={{ height: 400, width: '100vh'}}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            /> 
          </div>
        </div>
        
        <ModalDetail
          open ={open}
          setOpen={setOpen}
          setParamId={setParamId}
          data={data}
        />
      </div>
     
    </>
  )
}

export default Home;
