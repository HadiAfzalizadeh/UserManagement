import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import React, { useState } from 'react';
import UsersGrid from './components/usersGrid';
import AddAndEditUserModal from './components/addAndEditUserModal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Modal.setAppElement('#App');

function App() {
  const [isUserAddAndEditModalOpened, openUserAddAndEditModal] = useState(true);

  return (
    <>
      <Modal
        isOpen={isUserAddAndEditModalOpened}
        // style={modalStyles}
        ariaHideApp={true}
        className="Modal p-5"
        overlayClassName="Overlay"
      >
        <AddAndEditUserModal />
      </Modal>

      <UsersGrid />
    </>
  );
}

export default App;
