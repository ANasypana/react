import React from 'react';
import { Redirect } from 'react-router-dom';
import {book} from "../../../navigation/book";

export const DefaultPage = () => {
  return <Redirect to={book.weather} />
}