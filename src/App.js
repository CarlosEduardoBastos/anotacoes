import React from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  return (
    <div className="App">
      <div className="addTarefa">+</div>
      <div className="boxTarefas">
        
      </div>
    </div>
  );
}

export default App;
