import React from 'react';
import Header from '../components/Header';
import { create } from "react-test-renderer";
import { shallow, render } from 'enzyme';

describe("Header Component Test", () => {
  it("renders correctly", () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});