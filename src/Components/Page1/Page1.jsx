import React, { useState, useEffect } from "react";
import "./Page1.css";

import Navbar from "../Navbar/Navbar";
import MaterialTable from "material-table";

const Page1 = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const db = await response.json();
    setData(db);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    {
      field: "title",
      title: "Title",
      filtering: false,
    },
    {
      field: "body",
      title: "Body",
      filtering: false,
    },
    {
      field: "userId",
      title: "UID",
      filterPlaceholder: "Filter by ID",
      align: "center",
    },
  ];
  return (
    <div className="page1__container">
      <Navbar />
      <div className="page__div">
        <h2>Page 1 (Data Table)</h2>
        <div className="grid__div">
          <MaterialTable
            title="Lucas Lab Table"
            columns={columns}
            data={data}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {
                  setData([...data, newRow]);
                  resolve();
                }),
              onRowUpdate: (newRow, oldRow) =>
                new Promise((resolve, reject) => {
                  const updatedData = [...data];
                  updatedData[oldRow.tableData.id] = newRow;
                  setData(updatedData);
                  resolve();
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  const updatedData = [...data];
                  updatedData.splice(selectedRow.tableData.id, 1);
                  setData(updatedData);
                  resolve();
                }),
            }}
            options={{
              search: true,
              searchAutoFocus: true,
              searchFieldAlignment: "left",
              filtering: true,
              addRowPosition: "first",
              actionsColumnIndex: -1,
              paginationPosition: "top",
              showFirstLastPageButtons: false,
              // rowStyle: { backgroundColor: "rgb(241, 241, 241)" },
              // headerStyle: { backgroundColor: "rgb(241, 241, 241)" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
