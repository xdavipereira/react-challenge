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
    BookGridWrapper,
    StyledInputGroup,
    StyledButton,
    HeaderWrapper
}