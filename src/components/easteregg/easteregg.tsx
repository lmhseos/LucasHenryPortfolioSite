//import React, { useState } from 'react';
import Modal from 'react-modal';
import './easteregg.css';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <button className="duck-button" onClick={openModal}></button>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <span className="close" onClick={closeModal}>&times;</span>
        <img src="https://via.placeholder.com/150" alt="Model Image" />
      </Modal>
    </div>
  );
}

export default App;
