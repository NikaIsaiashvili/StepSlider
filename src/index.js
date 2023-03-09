import React from "react";
import ReactDOM from "react-dom/client";
import * as styles from "../src/Index.module.css"
import SlideShow from "../src/components/Slider/SlideShow"

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <>
    <SlideShow/>
    </>
);
