import styled from "styled-components"

const BooksGrid =  styled.ol`
display: grid;
list-style: none;
grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
grid-gap: 36px;
`

const BookItemGrid = styled.li`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`

const BookItemImage =  styled.img`
width: 128px;
height: 192px;

`

const BookItemTitle =  styled.h3`
width: 100%;
display: -webkit-box;
overflow: hidden;
margin: 0;
text-overflow: ellipsis;
font-weight: 900;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
text-align: center;
`

export {

    BooksGrid,
    BookItemGrid,
    BookItemImage,
    BookItemTitle
}