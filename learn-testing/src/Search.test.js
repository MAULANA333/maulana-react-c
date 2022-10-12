import React from "react";
import  { fireEvent, render, screen } from '@testing-library/react';
import Search from "./Search";

describe("Search", () => {
    text("calls the onChange callback handler", () => {
        const onChange = jest.fn();
        render(
            <search value ="" onChange={onChange}>
                Search
            </search>
        );
        fireEvent.change(screen.getByRole("textbox"), option: {
            target: { value: "JavaScript" }
        });
        expect{onChange}.toHaveBeenCalledTimes(1);
    });
});