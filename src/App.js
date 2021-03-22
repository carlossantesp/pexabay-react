import React, { Fragment, useState, useEffect, useRef } from "react";
import { config } from "./config/app";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ListImages from "./components/ListImages";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import Spinner from "./components/Spinner";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const contentRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryAPI = async () => {
      const { perPage, key, url, language } = config.app;
      let requestURL = "";
      if (search === "") {
        requestURL = `${url}/?key=${key}&per_page=${perPage}&page=${currentPage}&lang=${language}`;
      } else {
        requestURL = `${url}/?key=${key}&q=${search}&per_page=${perPage}&page=${currentPage}&lang=${language}`;
      }
      const resp = await fetch(requestURL);
      const data = await resp.json();
      setImages(data.hits);

      const calculatePageTotal = Math.ceil(data.totalHits / perPage);
      setTotalPages(calculatePageTotal);
      setLoading(false);
    };
    setLoading(true);
    queryAPI();
  }, [search, currentPage]);

  const handlePrevious = (e) => {
    e.preventDefault();
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage === 0) return;
    setCurrentPage(newCurrentPage);
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = (e) => {
    e.preventDefault();
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage > totalPages) return;
    setCurrentPage(newCurrentPage);
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <Header />
      <div ref={contentRef}>
        <Hero setSearch={setSearch} />
        <Wrapper>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <ListImages images={images} />
              <div className="paginate">
                {currentPage === 1 ? null : (
                  <Button event={handlePrevious}>Anterior</Button>
                )}
                {currentPage === totalPages ? null : (
                  <Button event={handleNext}>Siguiente</Button>
                )}
              </div>
            </>
          )}
        </Wrapper>
      </div>
    </Fragment>
  );
}

export default App;
