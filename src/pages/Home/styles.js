import { Button, Input } from "antd"
import styled from "styled-components"


const BookGridWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
`


const HeaderWrapper = styled.div`
    width: 80%;
    align-self: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

const BooksGrid =  styled.ol`
display: grid;
list-style: none;
grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
grid-gap: 36px;
padding-left: 1em;
padding-right: 1em;
margin-top: 2em;
`

const BookItemGrid = styled.li`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border: 1px solid #e3e3e3;
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


const StyledInputGroup = styled(Input.Group)`
    display: flex;
`

const StyledButton = styled(Button)`

    width: 50%;
    align-self: center;
    margin: 1em 0;
`

export {

    BooksGrid,
    BookItemGrid,
    BookItemImage,
    BookItemTitle,BookGridWrapper,
    StyledInputGroup,
    StyledButton,
    HeaderWrapper
}