import React, { useState } from "react";
import axios from "axios";
import Api from "./showApi";

const App = () => {
  const api: string = "https://randomuser.me/api";
  // const api = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  // Get Full People List from Random User API
  const getApi = async () => {
    setLoading(true);
    setTitle("GET");
    await axios
      .get(api)
      .then((res) => { // Then Block
        setTimeout(() => {
          setData((): any => [res.data.results[0], ...data]);
          localStorage.setItem("PeopleApi", data as any);
          setLoading(() => false);
        }, 0);
      })
      .catch((error) => { // Catch Block
          setLoading(() => false);
          console.error(error);
      });
  };

  // Delete individual
  const deleteItem = (obj:any) => setData(() => data.filter((item : any) => item!==obj))

  // Clear the list
  const clearData = () => setData([]);

  return (
    <>
      <Api
        title={title}
        getApi={getApi}
        deleteItem={deleteItem}
        clearData={clearData}
        data={data}
        loading={loading}
      />
    </>
  );
};

export default App;
