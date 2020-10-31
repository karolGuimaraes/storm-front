import React from 'react';
import { create } from "react-test-renderer";
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Header from '../components/Header';
import { HeadsetRounded } from '@material-ui/icons';

describe("Test Header Component", () => {
  it("renders correctly", () => {
    shallow(<Header />);
  });

  it('renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header.find('input')).toHaveLength(1)
  });

  it('renders without crashing', () => {
    const wrapper = mount(<Header />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(openSiderBar => [openSiderBar, setOpenSiderBar]);

    wrapper.find(".styles_btnTune__1gLvs").simulate("click");
    expect(changeSize).toBeTruthy();


  });

});