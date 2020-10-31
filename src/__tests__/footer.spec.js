import React from 'react';
import { create } from "react-test-renderer";
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

describe("Test Footer Component", () => {
  test("should ", () => {
    const footer = create(<footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});