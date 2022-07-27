import React from "react";
import { watchesApi } from "../helpers/const";

export const ClientContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "GET_WATCHES") {
    return {
      ...state,
      watches: action.payload,
    };
  }
  return state;
};

function ClientProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    watches: [],
  });

  const [searchWord, setSearchWord] = React.useState("");
  const [filterByPrice, setFilterByPrice] = React.useState(0);

  const getWatches = () => {
    fetch(`${watchesApi}?q=${searchWord}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_WATCHES",
          payload: data,
        });
      });
  };
  const data = {
    watches: state.watches,
    searchWord,

    getWatches,
    setSearchWord,
  };
  // console.log(searchWord);

  return (
    <ClientContext.Provider value={data}>{children}</ClientContext.Provider>
  );
}

export default ClientProvider;
