import React, {useState} from 'react';
import Accordian from './components/Accordian';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework '
  },
  {
    title: 'Why use React?',
    content: 'React is popular among developers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          options={options} 
          label="Select a Color" 
          selected={selected} 
          onSelectedChange={setSelected} 
        />
      </Route>
    </div>
  );
};