import { apiGet, createUrl } from "../../apiCall";
import { getAllUsers } from "../getUsers";

jest.mock("../../apiCall", () => {
    return {
        createUrl: jest.fn().mockReturnValue(`https://api.github.com/search/users`),
        apiGet: jest.fn(),
    };
});

describe("getAllUsers", () => {
    createUrl.mockReset();
    createUrl.mockReturnValue(`https://api.github.com/search/users`);
    test("should get users", () => {
        getAllUsers('userTest');
        expect(apiGet).toHaveBeenCalledTimes(1);
    });
});