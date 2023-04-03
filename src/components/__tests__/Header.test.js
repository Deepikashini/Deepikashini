import { render } from "@testing-library/react";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";  


test("Load logo on rendering Header component", () => {
    
    const header = render(
    <>
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    </>
    );
    console.log(header);

    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
});

test("Initially cart must have 0 items", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    )

    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart - 0");
});


