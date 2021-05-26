import { Button, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  addToFavorite,
  selectBookById,
  removeFromFavorite,
} from "../../reducers/booksSlice";
import noImage from "../../assets/img/noimage.jpeg";
import {
  DetailContainerWrapper,
  DetailContentWrapper,
  DetailBookImageWrapper,
  InfoDetail,
  ListDetails,
  BookItemImage,
  Paragraph,
  ListItem,
  ListAuthors,
  Span,
  StyledFavotiteBtn,
  TitleWrapper
}  from './styles'


export function Detail() {
  const history = useHistory();

  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedBook = useSelector((state) => selectBookById(state, id));

  useEffect(() => {
    if(!selectedBook) {
      history.push('/');
    }
  }, []);


  function handleOnChangeStar(data) {
    if (data) {
      dispatch(addToFavorite(selectedBook));
    } else {
      dispatch(removeFromFavorite(selectedBook));
    }
  }


  if(!selectedBook) {
    return <Spin></Spin>
  }

  return (
    <DetailContainerWrapper>
      <DetailContentWrapper>
        <DetailBookImageWrapper>
          <BookItemImage
            src={
              selectedBook.volumeInfo.imageLinks
                ? selectedBook.volumeInfo.imageLinks.thumbnail
                : noImage
            }
          ></BookItemImage>
        </DetailBookImageWrapper>
        <InfoDetail>
          <TitleWrapper>
            <h1>{selectedBook.volumeInfo.title}</h1>

            <StyledFavotiteBtn
              starred={selectedBook.starred ? 'true' : undefined}
              onChange={handleOnChangeStar}
            />
          </TitleWrapper>
          <ListDetails>
            <ListItem>
              <Paragraph> {selectedBook.volumeInfo.description}</Paragraph>
            </ListItem>

            { selectedBook.volumeInfo.authors &&
              <ListItem>
                <Span>Authors: </Span>
                <ListAuthors>
                  {selectedBook.volumeInfo.authors.map((author, index) => {
                    return <span key={index}>{author}  &nbsp;&nbsp;&nbsp;</span>;
                  })}
                </ListAuthors>
              </ListItem>

            }

            {selectedBook.volumeInfo.categories &&

            <ListItem>
              <Span>Categories: </Span>
              <ListAuthors>
                {selectedBook.volumeInfo.categories.map((category, index) => {
                  return <span key={index}>{category} &nbsp;&nbsp;&nbsp;     </span> ;
                })}
              </ListAuthors>
            </ListItem>

            }

            <ListItem>
              <Span>Pages: </Span> {selectedBook.volumeInfo.pageCount}
            </ListItem>
            <ListItem>
              <Span>Release Date: </Span>{" "}
              {selectedBook.volumeInfo.publishedDate}
            </ListItem>
          </ListDetails>
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </InfoDetail>
      </DetailContentWrapper>
    </DetailContainerWrapper>
  );
}

export default Detail;
