import * as React from 'react';
import './App.css';
import StatefulHello from './components/StatefulHello';
import DataList from './components/DataList';


import logo from './logo.svg';

let dataList = [
  {
    name: 'Item 1',
    value: 38823
  },
  {
    name: 'Item 2',
    value: 'Now is the time'
  },
  {
    name: 'Item 3',
    value: 'for all good people to come to the aid of their country'
  }
];

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <StatefulHello name="Typescript User Buddy" enthusiasmLevel={5} />
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

          <div className="row">
            <div className="col-md-3">

              <DataList name="My Data" list={dataList} />

            </div>
            <div className="col-md-3">

              <DataList name="My Data" list={[]} />

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
