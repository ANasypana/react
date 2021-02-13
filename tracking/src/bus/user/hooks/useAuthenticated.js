import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { book } from "../../../navigation/book";



export const useAuthenticated = (history) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.user);

  useEffect(() => {
    if(!isAuthenticated){
      history.replace(book.root)
    }
  }, [history, isAuthenticated]);



  return { isAuthenticated }
}