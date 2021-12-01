import React, { useState } from "react";
import axios from "axios";
import Api from "./showApi";

const App = () => {
  const api = "https://randomuser.me/api";
  // const api = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const getApi = async () => {
    setLoading(true);
    setTitle("GET");
    await axios
      .get(api)
      .then((res) => {
        setTimeout(() => {
          setData((): any => [res.data.results[0], ...data]);
          localStorage.setItem("PeopleApi", data as any);
          setLoading(() => false);
        }, 0);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(() => false);
          console.error(error);
        }, 0);
      });
  };

  const clearData = () => setData([]);

  const postApi = async () => {
    setLoading(() => true);
    setTitle(() => "POST");
    await axios
      .post(api, {
        title: "Hello World!",
        body: "I created a new post",
      })
      .then(({ data }) => {
        setLoading(() => false);
        setData(() => data.results);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(() => false);
          console.error(error);
        }, 2000);
      });
    // fetch(api).then(res => res.json()).then( data => setData(data))
  };

  return (
    <>
      <Api
        title={title}
        getApi={getApi}
        postApi={postApi}
        clearData={clearData}
        data={data}
        loading={loading}
      />
    </>
  );
};

export default App;
