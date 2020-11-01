import React from 'react';
import { create } from "react-test-renderer";
import Table from '../components/TableUser';
import { render } from "@testing-library/react";
import { screen } from 'query-extensions';

describe("Table Component Test", () => {
  test("renders correctly", () => {
    const table = create(<Table />);
    expect(table.toJSON()).toMatchSnapshot();
  });

  test("table select", () => {
    render(<Table/>);
    const table = screen.getBySelector('tbody');
    const row = table.firstChild;
    const checkbox = row.firstChild.querySelector('input[type="checkbox"]');
    expect(checkbox).toHaveProperty('checked', false);

    row.click();
    expect(checkbox).toHaveProperty('checked', true);
  });

});