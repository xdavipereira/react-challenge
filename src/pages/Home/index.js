import { Input, Select, Empty } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchBooks,
  selectAllBooks,
  selectBookStatus,
  selectTotalBooks,
} from "../../reducers/booksSlice";

import {
  BookGridWrapper,
  BooksGrid,
  HeaderWrapper,
  StyledButton,
  StyledInputGroup,
} from "./styles";
import { useHistory } from "react-router";
import Book from "../../components/Book";
import { addQuery, selectQueryValues } from "../../reducers/querySlice";

const { Search } = Input;

export function Home() {
  const dispatch = useDispatch();

  const history = useHistory();

  const booksData = useSelector(selectAllBooks);

  const bookStatus = useSelector(selectBookStatus);

  const totalBooks = useSelector(selectTotalBooks);

  const queryValues = useSelector(selectQueryValues);

  const [query, setQuery] = React.useState("");

  const [querySelect, setQuerySelect] = React.useState("intitle");

  const [startIndex, setStartIndex] = React.useState(0);

  const [maxResults, setMaxResults] = React.useState(10);

  useEffect(() => {
    if (booksData.books.length === 0) {
      handleOnSearch("");
    } else {
      debugger
      setQuery(queryValues.query)
      setStartIndex(queryValues.startIndex)
      setMaxResults(queryValues.maxResults)
      setQuerySelect(queryValues.filter)

    }

  }, []);

  function handleOnSearch(data) {
    dispatch(
      fetchBooks({
        query: data,
        startIndex: 0,
        maxResults,
        filter: querySelect,
      })
    );
    setQuery(data);
    setStartIndex(0);
  }

  function handleGetMoreBooks() {
    let newStartIndex = startIndex + maxResults;

    dispatch(
      fetchBooks({
        query,
        startIndex: newStartIndex,
        filter: querySelect,
        maxResults,
      })
    );

    setStartIndex(newStartIndex);
    
    dispatch(addQuery(
      {
        query,
        startIndex: newStartIndex,
        filter: querySelect,
        maxResults,
      }
    ))
  
  }

  function goesToDetail(data) {
    history.push(`/${data}`);
  }

  function handleSelect(value) {
    setQuerySelect(value);
  }

  function handleOnChange(e) {
    setQuery(e.target.value);
  }

  return (
    <BookGridWrapper>
      <HeaderWrapper>
        <h1>React Challenge</h1>

        <StyledInputGroup>
          <Select defaultValue={querySelect} onSelect={handleSelect}>
            <Select.Option value="inauthor">Author</Select.Option>
            <Select.Option value="intitle">Title</Select.Option>
          </Select>
          <Search placeholder="Search" value={query} onChange={handleOnChange} onSearch={handleOnSearch} />
        </StyledInputGroup>
      </HeaderWrapper>

      {totalBooks === 0 && bookStatus === "succeeded" && <Empty />}

      <BooksGrid>
        {booksData.books.map((item, index) => {
          return <Book key={index} data={item} onClick={goesToDetail} />;
        })}
      </BooksGrid>

      {booksData.books.length > 0 && (
        <StyledButton
          type="primary"
          shape="round"
          size="large"
          onClick={handleGetMoreBooks}
        >
          Load more books ...
        </StyledButton>
      )}
    </BookGridWrapper>
  );
}

export default Home;
