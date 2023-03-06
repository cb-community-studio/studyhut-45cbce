import React from "react";
import { render, screen } from "@testing-library/react";

import HomeworkPage from "../HomeworkPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders homework page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HomeworkPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("homework-datatable")).toBeInTheDocument();
    expect(screen.getByRole("homework-add-button")).toBeInTheDocument();
});
