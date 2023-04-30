
import './App.css';
import {Reorder} from 'framer-motion';
import {useState} from 'react';



function App() {


  const [list, setList] = useState([
    "red", "green", "blue", "orange", 'purple'
  ]);

  return (
    <div >
      <Reorder.Group style={{background: '#eee'}} axis='y' values={list} onReorder={setList}>
      {
        list.map(e => <Reorder.Item key={e} whileDrag={{
          scale: 1.2,
          cursor: 'pointer'
        }} value={e} style={{
          width: '200px',
           heigth: '35px',
           color: 'white',
            textTransform: 'uppercase',
             fontWeight: 'bold',
              background: e, 
              display: 'flex',
              justifyContent: 'center',
              margin: '2rem'
               }}>
          {e}
        </Reorder.Item>)
      }
      </Reorder.Group>
    </div>
  );
}

export default App;
