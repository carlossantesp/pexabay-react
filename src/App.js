import React, { Fragment, useState, useEffect } from "react";
import { config } from "./config/app";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ListImages from "./components/ListImages";
import Wrapper from "./components/Wrapper";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const queryAPI = async () => {
      const imagePerPage = config.app.perPage;
      const key = config.app.key;
      const urlAPI = config.app.url;
      let url = "";
      if (search === "") {
        url = `${urlAPI}/?key=${key}&per_page=${imagePerPage}&page=${currentPage}`;
      } else {
        url = `${urlAPI}/?key=${key}&q=${search}&per_page=${imagePerPage}&page=${currentPage}`;
      }
      const resp = await fetch(url);
      const data = await resp.json();
      setImages(data.hits);
    };
    queryAPI();
  }, [search, currentPage]);
  return (
    <Fragment>
      <Header />
      <Hero setSearch={setSearch} />
      <Wrapper>
        <ListImages images={images} />
      </Wrapper>
    </Fragment>
  );
}

export default App;
