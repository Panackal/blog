import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ paddingTop: "50px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "green", fontWeight: "bold" }}>Blog ID</TableCell>
              <TableCell style={{ color: "green", fontWeight: "bold" }}>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.title}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
