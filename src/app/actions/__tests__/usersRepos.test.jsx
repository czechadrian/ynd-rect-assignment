import {getAllUserRepos} from "../../../api-wrapper/users/getUserRepos";
import {getUserRepos} from "../userRepos";

jest.mock("../../../api-wrapper/users/getUserRepos");

describe("fetch user Repos", () => {
    it("should dispatch init and success actions", async () => {
        const dispatchStub = jest.fn();
        const payload = 'test';

        getAllUserRepos.mockReset();
        getAllUserRepos.mockResolvedValue(payload);
        await getUserRepos("test")(dispatchStub);

        expect(dispatchStub).toHaveBeenCalledTimes(2);
        expect(dispatchStub).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                type: 'user/GET_REPOS_INIT',
            })
        );
        expect(dispatchStub).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                payload:"test",
                type: 'user/GET_REPOS_SUCCESS',
            })
        );
    });
    it("should dispatch init and failure actions", async () => {
        const dispatchStub = jest.fn();

        getAllUserRepos.mockReset();
        getAllUserRepos.mockRejectedValue();
        await getUserRepos("test")(dispatchStub);

        expect(dispatchStub).toHaveBeenCalledTimes(2);
        expect(dispatchStub).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                type: 'user/GET_REPOS_INIT',
            })
        );
        expect(dispatchStub).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                type: 'user/GET_REPOS_FAILURE',
            })
        );
    });
});