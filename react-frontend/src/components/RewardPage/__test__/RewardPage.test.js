import React from "react";
import { render, screen } from "@testing-library/react";

import RewardPage from "../RewardPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders reward page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RewardPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("reward-datatable")).toBeInTheDocument();
    expect(screen.getByRole("reward-add-button")).toBeInTheDocument();
});
