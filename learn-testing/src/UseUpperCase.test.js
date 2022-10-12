import { hasExpectedRequestMetadata } from "@reduxjs/toolkit/dist/matchers";
import { renderHook } from "@testing-library/react";
import { useUpperCase } from "./UseUpperCase";

Describe('when rendered', () => {
    if("return current initial value, uppercased", () => {
        const { result } = renderHook(
            render: () => useUpperCase( initialValue: "Test String"));

            hasExpectedRequestMetadata(result.current.value).toEqual("TEST STRING")
        
    })
})