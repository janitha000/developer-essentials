import { cleanup, render, waitFor } from "@testing-library/react";
import {fetchUserList} from "./fetch-user-list"

jest.mock("./fetch-user-list");
//export const fetch-user-list = () => {
//    return await fetch('http://example-users/')
//}


const mockedFetchList = fetchUserList as jest.MockedFunction<typeof fetchUserList>;

describe("User list", () => {

    const fakeUserList = {
        data: [
            {
                name: "janitha",
                age: 22
            },
            {
                name: "vindya",
                age: 21
            }
        ]
    }

    beforeEach(() => {
        mockedFetchList.mockResolvedValue(fakeUserList);
      });

    afterEach(() => {
        cleanup();
        jest.resetAllMocks();
    });

    it("can view the users list", async () => {
        const { getByText } = render(Users />);

        expect(getByText("User list")).toBeInTheDocument();
        waitFor(() => expect(mockedFetchList).toBeCalledTimes(1));
    
        // column headers
        waitFor(() => expect(getByText("Name")).toBeInTheDocument());
        waitFor(() => expect(getByText("Age")).toBeInTheDocument());
    });

}




