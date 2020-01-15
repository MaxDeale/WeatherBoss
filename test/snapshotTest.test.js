import React from "react"
import renderer from "react-test-renderer"
import App from "../src/App"
import Display from "../src/components/Display"

test('page renders correctly',()=>{
    const tree = renderer
    .create(<App/>)
    .toJSON()
    expect(tree).toMatchSnapshot()
});

test('display renders correctly',()=>{
    const tree2 = renderer
    .create(<Display/>)
    .toJSON()
    expect(tree2).toMatchSnapshot()
});

