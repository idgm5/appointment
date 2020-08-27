/* eslint-disable */
import '@testing-library/jest-dom';
import React from 'react';
import { render, getByText, screen } from '@testing-library/react';
import Catalogue from '../containers/catalogue';
import Appointments from '../containers/appointments';
import Details from '../containers/details';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const propData = mockStore({
  bikes: [
    {
      model: 'testing',
      description: 'description test',
      picture: '/logo192.png',
    },
  ],
  user: 'testUser',
  appointments: [],
});

describe("Catalogue component", () => {
    it("should render the catalogue component", () => {
        expect(
            shallow(
                <Provider store={propData}>
                    <Catalogue />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});

describe("Appointments component", () => {
    it("should render the appointments component", () => {
        expect(
            shallow(
                <Provider store={propData}>
                    <Appointments />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});

describe("Details component", () => {
    it("should render the details component", () => {
        expect(
            shallow(
                <Provider store={propData}>
                    <Details />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});
