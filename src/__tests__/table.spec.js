import React from 'react';
import { create } from "react-test-renderer";
import { shallow } from 'enzyme';
import Table from '../components/TableUser';

describe("Test Table Component", () => {
  test("should ", () => {
    const table = create(<Table />);
    expect(table.toJSON()).toMatchSnapshot();
  });
});