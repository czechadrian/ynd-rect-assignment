import {getAllUsers} from "../../../api-wrapper/users/getUsers";
import {getUsers} from "../users";

jest.mock("../../../api-wrapper/users/getUsers");

describe("fetch users", () => {
    it("should dispatch init and success actions", async () => {
        const dispatchStub = jest.fn();
        const payload = 'test';

        getAllUsers.mockReset();
        getAllUsers.mockResolvedValue(payload);
        await getUsers("test")(dispatchStub);

        expect(dispatchStub).toHaveBeenCalledTimes(2);
        expect(dispatchStub).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                type: 'users/GET_USERS_INIT',
            })
        );
        expect(dispatchStub).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                type: 'users/GET_USERS_SUCCESS',
            })
        );
    });
    it("should dispatch init and failure actions", async () => {
        const dispatchStub = jest.fn();

        getAllUsers.mockReset();
        getAllUsers.mockRejectedValue();
        await getUsers("test")(dispatchStub);

        expect(dispatchStub).toHaveBeenCalledTimes(2);
        expect(dispatchStub).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                type: 'users/GET_USERS_INIT',
            })
        );
        expect(dispatchStub).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                type: 'users/GET_USERS_FAILURE',
            })
        );
    });
});