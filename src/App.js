
import React from 'react';
import './App.css';
import ModalRoot from './modules/modals/components/ModalRoot';
import ModalService from './modules/modals/services/ModalService';
import TestModal from './components/TestModal';

function App() {

  const addModal = () => {
    ModalService.open(TestModal);
  };

  return (
    <div className="App">
      <ModalRoot />
      <button onClick={ addModal } className="btn btn-primary m-4">Open modal</button>
    </div>
  );
}

export default App;
