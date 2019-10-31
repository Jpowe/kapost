import React, { useState, useEffect, useReducer, Fragment } from "react";
import API from "./utils/API";
import TableList from "./TableList";
import Pagination from "./Pagination";
import axios from "axios";
const styles = {
  button: {
    backgroundColor: "#009688" /* Material Design teal 500 */,
    border: "none",
    color: "white",
    padding: "11px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "8px",
    cursor: "pointer"
  },
  input: {
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box"
  }
};

function useFetch(initialUrl, initData) {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initData);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setLoading(true);
      try {
        const result = await API.get(url);
        console.table(result.data);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return [data, loading, isError, setUrl];
}

function App() {
  const [query, setQuery] = useState("");
  const [data, loading, isError, doFetch] = useFetch("/users", []);
  const [visibleData, setVisibleData] = useState(data);
  const [cursor, setCursor] = useState(0);
  const [count, setCount] = useState();
  const limit = 5;

  const visData = () => {
    return data.filter((x, index) => index >= cursor && index < cursor + limit);
  };
  //UPDATE VISIBLE DATA ON API DATA CHANGE
  useEffect(() => {
    const set = () => {
      setCount(data.length);
      setVisibleData(visData());
    };
    set();
  }, [data]);
  // UPDATE VISIBLE DATA ON CURSOR CHANGE
  useEffect(() => {
    const set = () => {
      setVisibleData(visData());
    };
    set();
  }, [cursor]);

  const next = () => {
    setCursor(cursor + limit);
  };
  const prev = () => {
    setCursor(cursor - limit);
  };

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          maxWidth: "900px"
        }}
      >
        <div style={{ margin: "8px" }}>
          <form
            onSubmit={event => {
              doFetch(`/users?name_like=${query}`);
              event.preventDefault();
            }}
          >
            <input
              style={styles.input}
              type="text"
              placeholder="Enter seach term."
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
            <button type="submit" style={styles.button}>
              Search
            </button>
          </form>
        </div>
        <Pagination
          next={() => next()}
          prev={() => prev()}
          cursor={cursor}
          count={count}
          limit={limit}
        />
      </div>
      {loading ? <div>Loading ...</div> : <TableList data={visibleData} />}
      {isError && <div>Something went wrong ...</div>}
    </Fragment>
  );
}

export default App;
