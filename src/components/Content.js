import React from 'react';
import { Pagination } from 'react-instantsearch-dom';
import Header from './Header';
import Test from './Test'

const Content = () => (
  <main className="content">
    <Header />
    <Test />
    <Pagination />
  </main>
);

export default Content;
