import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "jest-styled-components";
import renderer from "react-test-renderer";
import UserList from "../UserList";
import {getUserRepos} from "../../actions/userRepos";

jest.mock("../../actions/userRepos", () => {
    return {
        getUserRepos: jest.fn(),
    };
});

jest.mock("react-redux", () => {
    return {
        useSelector: jest.fn(),
        useDispatch: jest.fn(),
    };
});

describe("UserList", () => {
    const dispathMock = jest.fn();
    beforeEach(() => {
        useSelector.mockImplementation(() => [{name:"repo name", stargazers_count:1,description:"desc"}]);
        useDispatch.mockReturnValue(dispathMock);

        getUserRepos.mockReturnValue(() => jest.fn());

        jest.clearAllMocks();
    });
    test("selected comments component test", () => {
        const tree = renderer.create(<UserList users={[{login:"login"}]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});