import React, { useState, useEffect } from "react";
import "./Page1.css";

import Navbar from "../Navbar/Navbar";
// import { DataGrid } from "@material-ui/data-grid";
import { DataGrid } from "@mui/x-data-grid";

const Page1 = () => {
  const [rows, setRows] = useState([]);

  const getUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    console.log(data);
    setRows(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    { field: "title", headerName: "Title", width: 300, editable: true },
    {
      field: "body",
      headerName: "Body",
      width: 300,
      editable: true,
    },
    {
      field: "userId",
      headerName: "UID",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      type: "form",
      width: 250,
      editable: true,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'lastName') || ''
    //     }`,
    // },
  ];
  return (
    <div className="page1__container">
      <Navbar />
      <div className="page__div">
        <h2>Page 1 (Data Table)</h2>
        <div className="grid__div">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            // checkboxSelection
            // disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
