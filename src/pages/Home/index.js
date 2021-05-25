import { Spin } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import WrapperContainer from "../../components/WrapperContainer";
import { fetchBooks } from "./booksSlice";

export function Home() {

    const dispatch = useDispatch();
    const bookStatus = useSelector(state => state.books.status)
    const error = useSelector(state => state.books.error);

    useEffect(() => {
        if (bookStatus === 'idle') {
            dispatch(fetchBooks('davi'));
        }
    }, [bookStatus, dispatch])

    if(bookStatus === 'loading') {
        return <Spin />
    }

    return (
        <WrapperContainer>
            Home Page
        </WrapperContainer>
    )
}

export default Home;