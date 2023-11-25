import React, { useEffect,useState } from "react"
import { Box } from "@mui/material/"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

import CircularProgress from '@mui/material/CircularProgress';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';

import axios from "axios";
function Home(){
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 160,
        },
      ];

      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    var dataLoginLocal = JSON.parse(localStorage.getItem("dataRegister"));
    useEffect(()=>{
        if(!dataLoginLocal){
            navigate('/register')
        } 
        // const res = axios.get('')
        // setTimeout(function () {
        //     setLoading(false)
        //   }, 3000);
    },[])

    const handleLogout=()=>{
        localStorage.removeItem("dataRegister");
        navigate('/register')
    }
    return (
        <>
            {loading ? <Box sx={{display:'flex', justifyContent:'center', margin: '25%'}}><CircularProgress /></Box> :
                <div>
                    <Box sx={{display:'flex', justifyContent:"flex-end", alignItems: 'center', padding:'20px'}}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Typography sx={{marginRight:'40px', marginLeft:'15px'}}>{dataLoginLocal.firstName + dataLoginLocal.lastName}</Typography>
                        <Button variant="contained" onClick={handleLogout}>Log out</Button>
                    </Box>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                </div>
            
            }
        </>
    )
}
export default Home