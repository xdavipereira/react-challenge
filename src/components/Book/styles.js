import { Button, Input } from "antd"
import styled from "styled-components"
import Favorite from "../Favorite"



const BookItemGrid = styled.li`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border: 1px solid #e3e3e3;
position: relative;
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
font-weight: 700;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
text-align: center;
border-top: 1px solid #e3e3e3;
`

const StyledFavotiteBtn = styled(Favorite)`
    color: 'gold';
    position: absolute;
    top: 0px;
    right: 10px;
`

export {
    StyledFavotiteBtn,
    BookItemGrid,
    BookItemImage,
    BookItemTitle,
}