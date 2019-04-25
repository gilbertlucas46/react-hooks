import React, {useState} from 'react';
import Togggle from './Toggle'
const App = () => {
  const [count, Counter] = useState(0)
  const [name, setName] = useState('')
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <button onClick={()=> Counter(count + 1) }>
        {count} Clicked
      </button>
      <h3>{name}</h3>
      <Togggle/>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
    </div>
  );
};

export default App;
