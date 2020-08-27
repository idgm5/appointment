/* eslint-disable */
import '@testing-library/jest-dom';
import React from 'react';
import { render, getByText, screen } from '@testing-library/react';
import Login from '../components/login';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const propData = mockStore({
  user: 'testUser',
  appointments: [],
});

describe("Login component", () => {
    it("should render the login component", () => {
        expect(
            shallow(
                <Provider store={propData}>
                    <Login />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});
