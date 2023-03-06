import React from "react";
import { render, screen } from "@testing-library/react";

import HomeworkEditDialogComponent from "../HomeworkEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders homework edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HomeworkEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("homework-edit-dialog-component")).toBeInTheDocument();
});
