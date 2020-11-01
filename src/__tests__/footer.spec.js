import React from 'react';
import { create } from "react-test-renderer";
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

describe("Footer Component Test", () => {
  test("renders correctly", () => {
    const footer = create(<footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});