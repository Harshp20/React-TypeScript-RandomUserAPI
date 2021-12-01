import React from "react";

const showApi = (props: any) => {
  // console.log(data)
  return (
    <>
      <div className="text-center" style={{ margin: "20px" }}>
        <button
          className="btn btn-success"
          style={{ marginLeft: "10px" }}
          onClick={() => props.getApi()}
        >
          Get
        </button>
        <button
          className="btn btn-warning"
          style={{ marginLeft: "10px" }}
          onClick={() => props.postApi()}
        >
          Post
        </button>
        <button className="btn btn-primary" style={{ marginLeft: "10px" }}>
          Put
        </button>
        <button className="btn btn-danger" style={{ marginLeft: "10px" }}>
          Delete
        </button>
        <button
          className="btn btn-danger"
          style={{ marginLeft: "10px" }}
          onClick={() => props.clearData()}
        >
          Clear
        </button>

        {props.loading ? (
          <h6 style={{ margin: "10px", color: "blue" }}>
            <hr />
            Loading...
            <hr />
          </h6>
        ) : (
          ""
        )}

        {props.data.length ? (
          <h6>
            <hr />
            <i>{props.title} Response</i>
            <br /> <hr />
          </h6>
        ) : (
          ""
        )}
        {props.data.length
          ? props.data.map((data: any) => (
              <h6 key={data.name.first}>
                {data.name.first} {data.name.last}
                <br />
                <br />
                <img alt="" src={data.picture.large} />
                <br />
                <hr />
              </h6>
            ))
          : ""}
      </div>
      {/* {<pre>{JSON.stringify(data[0], null , 2)}</pre>} */}
    </>
  );
};

export default showApi;
