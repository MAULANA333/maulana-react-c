// import React from "react";
// import { render, screen } from "@testing-library/react";

// import App from "./App";

// describe( name:"App", fn () => {
//     test( name: 'renders App Component', fn: () => {
//         render(<App />);
//         // screen.getByText('Search:');
//         expect(screen.getByText('Screen')), toBeInTheDocument();
//         //Screen.debug
//     })
// })

import React from "react";

const Search = ({ value, onChange, children }) => {
    return (
}
<div>
    <label htmlFor="search">{children}</label>
    <label  id="search"
            type="text"
            value={value}
            onChange={onchange}/>
</div>
);
};

export default Search;
