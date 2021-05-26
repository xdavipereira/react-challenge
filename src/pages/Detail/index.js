import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { selectBookById } from "../Home/booksSlice";
import noImage from '../../assets/img/noimage.jpeg'
import styled from "styled-components";



const DetailContainerWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`


const DetailContentWrapper = styled.div`
    width: 80%;
    display: flex;

`

const DetailBookImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
`

const InfoDetail = styled.div`
    padding: 1em;;
`

const ListDetails = styled.ul`
    list-style: none;
    padding: 0;
`

const BookItemImage =  styled.img`
width: 128px;
height: 192px;

`

const Paragraph = styled.p``;

const ListItem = styled.li`
    display: flex;
    border-top: 1px solid #e3e3e3;
    align-items: center;
    min-height: 3rem;
    padding-right: 1em;
    flex-wrap: wrap;
`;


const ListAuthors = styled.li`
    display: flex;
`;

const Span = styled.span`
    font-weight: 700;
    padding-right: 0.2rem;
`



export function Detail() {

    const history = useHistory();

    const dispatch = useDispatch();
    const { id } = useParams();
    const selectedBook = useSelector(state => selectBookById(state, id))


    useEffect(() => {

        console.log(selectedBook)

    })


    return (
        <DetailContainerWrapper>
            <DetailContentWrapper>

               
            <DetailBookImageWrapper>
                        <BookItemImage src={selectedBook.volumeInfo.imageLinks ? selectedBook.volumeInfo.imageLinks.thumbnail : noImage }></BookItemImage>
            </DetailBookImageWrapper>
            <InfoDetail>

                <h1>{selectedBook.volumeInfo.title}</h1>
                <ListDetails>
                    <ListItem>
                        <Paragraph> {selectedBook.volumeInfo.description}</Paragraph>
                    </ListItem>

                    <ListItem>
                        <Span>Authors: </Span>
                        <ListAuthors>
                                {selectedBook.volumeInfo.authors.map((author, index) => {
                                    return <ListItem key={index}>{author}</ListItem>
                                })}
                         </ListAuthors>

                    </ListItem>
                    <ListItem>
                    <Span>Pages: </Span> {selectedBook.volumeInfo.pageCount}

                    </ListItem>
                    <ListItem>
                    <Span>Release Date: </Span> {selectedBook.volumeInfo.publishedDate}
                    </ListItem>



                </ListDetails>
                        <Button type="primary" shape="round" size="large" onClick={() => history.goBack()} >Voltar ...</Button> 

            </InfoDetail>
 
            </DetailContentWrapper>


        </DetailContainerWrapper>
    )
}

export default Detail;