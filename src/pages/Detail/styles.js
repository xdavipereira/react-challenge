import styled from "styled-components";
import Favorite from "../../components/Favorite";

const DetailContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

`;

const DetailContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column;
  justify-content:center;
  align-items: center;

  margin-top: 1em;;
  padding: 1em;
  border: 1px solid #e3e3e3;
`;

const DetailBookImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

const InfoDetail = styled.div`
  padding: 1em; ;
  width: 100%
`;

const ListDetails = styled.ul`
  list-style: none;
  padding: 0;
`;

const BookItemImage = styled.img`
  width: 128px;
  height: 192px;
`;

const Paragraph = styled.p`
    width:100%;
    overflow:hidden;
    word-wrap: break-word;
`;

const ListItem = styled.li`
  display: flex;
  border-top: 1px solid #e3e3e3;
  align-items: center;
  min-height: 3rem;
  padding-right: 1em;
  flex-wrap: wrap;
`;

const ListAuthors = styled.div`
  display: flex;
`;

const Span = styled.span`
  font-weight: 700;
  padding-right: 0.2rem;
`;

const TitleWrapper = styled.div`
    position: relative;
`

const StyledFavotiteBtn = styled(Favorite)`
    position: absolute;
    top: 10px;
    right: 0;
`

export {
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
  TitleWrapper,
  StyledFavotiteBtn

};
