import { apiGet, createUrl } from "../../apiCall";
import { getAllUserRepos } from "../getUserRepos";

jest.mock("../../apiCall", () => {
    return {
        createUrl: jest.fn().mockReturnValue(`https://api.github.com/users/userTest/repos`),
        apiGet: jest.fn(),
    };
});

describe("getAllUserRepos", () => {
    createUrl.mockReset();
    createUrl.mockReturnValue(`https://api.github.com/users/userTest/repos`);
    test("should get user repos", () => {
        getAllUserRepos('userTest');
        expect(apiGet).toHaveBeenCalledTimes(1);
    });
});