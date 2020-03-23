import React, {useState} from 'react';
import './App.css';
import {BoxContainer, Form} from "./components";

function App() {
  const [data, setData]= useState([
    'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
    'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
    'forEach', 'map', 'reduce', 'reduceRight', 'filter',
    'some', 'every'
  ])
  const [inputValue, setInputValue] = useState("")

  const onSubmit = () => setData(newData => [...data, inputValue])
  const filterData = data.filter(el => el.includes(inputValue))
  const dataZero = filterData.length === 0

  return (
    <div>
      <Form onChange={setInputValue} onSubmit={onSubmit} zero={dataZero} inputValue={inputValue}/>
      <BoxContainer sendData={filterData} />
    </div>
  )
}

export default App;
