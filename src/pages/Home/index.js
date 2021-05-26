import { Input, Button } from "antd";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchBooks, selectAllBooks } from "./booksSlice";

import noImage from '../noimage.jpeg'
import { BookItemGrid, BookItemImage, BookItemTitle, BooksGrid } from "./styles";


const { Search } = Input;


export function Home() {

    const dispatch = useDispatch();
    const books = useSelector(selectAllBooks);

    const [query, setQuery] = React.useState('');

    const [startIndex, setStartIndex] = React.useState(0);
    const [maxResults, setMaxResults] = React.useState(5);


    function handleOnSearch(data) {
        dispatch(fetchBooks({query: data, startIndex: 0 }));
        setQuery(data);
        setStartIndex(0);
    }

    function handleGetMoreBooks() {

        let newStartIndex = startIndex + maxResults

        dispatch(fetchBooks({query, startIndex: newStartIndex}));

        setStartIndex(newStartIndex);

    }


    return (

        <div>
        <Search onSearch={handleOnSearch} />
        <BooksGrid >
            {
                books.books.map((item, index) => {
                    return (
                        <BookItemGrid key={index}>
                            <BookItemImage src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail: noImage} ></BookItemImage>
                            <BookItemTitle>{item.volumeInfo.title}</BookItemTitle>
                            
                        </BookItemGrid>
                    )
                })
            }
        </BooksGrid>

        {books.books.length > 0 &&
            <Button type="primary" shape="round" size="large" onClick={handleGetMoreBooks} >Load more books ...</Button>    
        }
        </div>
    )
}

export default Home;