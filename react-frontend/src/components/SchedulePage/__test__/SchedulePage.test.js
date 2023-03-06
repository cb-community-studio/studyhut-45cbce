import React from "react";
import { render, screen } from "@testing-library/react";

import SchedulePage from "../SchedulePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders schedule page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SchedulePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("schedule-datatable")).toBeInTheDocument();
    expect(screen.getByRole("schedule-add-button")).toBeInTheDocument();
});
