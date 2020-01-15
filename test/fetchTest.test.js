import React from "react"
import {componentDidMount,fetch} from "../src/components/Display"
import renderer from "react-test-renderer"

test('test wether the fetch is working',()=>{
const data = fetch('http://api.openweathermap.org/data/2.5/weather?q=$london&APPID=f137ac696ed382fd7b4ba99a441bc329')
.then(res=>res.json)
.then(result=>{
data = result;
})
expect(data).toBeObjectContaining(object)
}) 