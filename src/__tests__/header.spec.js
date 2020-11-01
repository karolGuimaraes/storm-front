import React from 'react';
import Header from '../components/Header';
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import { screen } from 'query-extensions';
import '@testing-library/jest-dom/extend-expect';

describe("Header Component Test", () => {
  it("renders correctly", () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });

  it("open SiderBar", () => {
    render(<Header/>);
    const closedSiderBar = screen.queryByRole('presentation');
    expect(closedSiderBar).not.toBeTruthy();
    const button = screen.getBySelector('.btnTune');
    button.click();
    const openedSiderBar = screen.queryByRole('presentation');
    expect(openedSiderBar).toBeTruthy();
  });

  it("close SiderBar", () => {
    render(<Header/>);
    const button = screen.getBySelector('.btnTune');
    button.click();
    const openedSiderBar = screen.queryByRole('presentation');
    expect(openedSiderBar).toBeTruthy();

    const buttonClose = screen.getBySelector('.btnClose');
    buttonClose.click();
    const closedSiderBar = screen.queryByRole('presentation');
    expect(closedSiderBar).not.toBeTruthy();
  });
});