import React from 'react';
import { create } from "react-test-renderer";
import { shallow } from 'enzyme';
import Table from '../components/TableUser';

describe("Table Component Test", () => {
  test("renders correctly", () => {
    const table = create(<Table />);
    expect(table.toJSON()).toMatchSnapshot();
  });
});