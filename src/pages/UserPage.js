import React from 'react';
import Header from '../components/Header';
import TableUsers from '../components/TableUser';

export default class UserPage extends React.Component {
  render() {
    return (
      <>
      <Header />
      <TableUsers />
      </>
    )
  }
}