import noImage from "../../assets/img/noimage.jpeg";
import { StyledFavotiteBtn } from "../../pages/Detail/styles";
import { BookItemGrid, BookItemImage, BookItemTitle } from "./styles";

export function Book({ data, onClick }) {
  function goesToDetail() {
    onClick(data.id);
  }

  return (
    <BookItemGrid onClick={goesToDetail}>
      <BookItemImage
        src={
          data.volumeInfo.imageLinks
            ? data.volumeInfo.imageLinks.thumbnail
            : noImage
        }
      ></BookItemImage>
      <BookItemTitle>{data.volumeInfo.title}</BookItemTitle>

      {data.starred &&
        <StyledFavotiteBtn starred={'true'} />
      }
    </BookItemGrid>
  );
}

export default Book;
