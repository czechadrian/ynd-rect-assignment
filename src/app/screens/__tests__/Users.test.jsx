import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "jest-styled-components";
import renderer from "react-test-renderer";
import Users from "../Users";
import {getUsers} from "../../actions/users";

jest.mock("../../actions/users", () => {
    return {
        getUsers: jest.fn(),
    };
});

jest.mock("react-redux", () => {
    return {
        useSelector: jest.fn(),
        useDispatch: jest.fn(),
    };
});

describe("Users", () => {
    const dispathMock = jest.fn();
    beforeEach(() => {
        useSelector.mockImplementation(() => [{login:"user login"}]);
        useDispatch.mockReturnValue(dispathMock);

        getUsers.mockReturnValue(() => jest.fn());

        jest.clearAllMocks();
    });
    test("selected comments component test", () => {
        const tree = renderer.create(<Users />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});