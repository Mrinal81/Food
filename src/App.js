// const heading = React.createElement("h1", { id: "heading" }, "hello world from react");

// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "This is Mrinal 🚀"),
//         React.createElement("h2", {}, "i am h2 tag😊"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "i am h1 tag"),
//         React.createElement("h2", {}, "i am h2 tag"),
//     ]),
// ]);


// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// // React Element

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React Course 🚀");

// const heading1 = (
//     <h1 className="head">Hello Mrinal 🚀</h1>
// );


// //React Functional  Component


// const Heading1 = () => (
//     <h1 className="head">Hello Mrinal 🚀</h1>
// );


// //Component Composition- writing a component inside another component🚀
// const HeadingComponent = () => (
//     <div className="container">
//         <Heading1 />
//         {/* this is how u can put react element inside the react component... */}
//         {heading}
//         <h1>Hello Anand🚀🚀</h1>
//     </div>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<App />);
