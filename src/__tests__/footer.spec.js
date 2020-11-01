import React from 'react';
import { create } from "react-test-renderer";

describe("Footer Component Test", () => {
  test("renders correctly", () => {
    const footer = create(<footer/>);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});