import { Input, Select, Empty } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchBooks,
  selectAllBooks,
  selectBookStatus,
  selectTotalBooks,
} from "./booksSlice";

import noImage from "../../assets/img/noimage.jpeg";
import {
  BookGridWrapper,
  BookItemGrid,
  BookItemImage,
  BookItemTitle,
  BooksGrid,
  HeaderWrapper,
  StyledButton,
  StyledInputGroup,
} from "./styles";
import { useHistory } from "react-router";

const { Search } = Input;

export function Home() {
  const dispatch = useDispatch();

  const history = useHistory();

  const books = useSelector(selectAllBooks);

  const bookStatus = useSelector(selectBookStatus);

  const totalBooks = useSelector(selectTotalBooks);

  const [query, setQuery] = React.useState("");

  const [querySelect, setQuerySelect] = React.useState("intitle");

  const [startIndex, setStartIndex] = React.useState(0);

  const [maxResults] = React.useState(10);

  useEffect(() => {
    handleOnSearch("");
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
  }

  function goesToDetail(data) {
    history.push(`/${data}`);
  }

  function handleSelect(value) {
    setQuerySelect(value);
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
          <Search placeholder="Search" onSearch={handleOnSearch} />
        </StyledInputGroup>
      </HeaderWrapper>

      {totalBooks === 0 && bookStatus === "succeeded" && <Empty />}

      <BooksGrid>
        {books.books.map((item, index) => {
          return (
            <BookItemGrid onClick={() => goesToDetail(item.id)} key={index}>
              <BookItemImage
                src={
                  item.volumeInfo.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : noImage
                }
              ></BookItemImage>
              <BookItemTitle>{item.volumeInfo.title}</BookItemTitle>
            </BookItemGrid>
          );
        })}
      </BooksGrid>

      {books.books.length > 0 && (
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
