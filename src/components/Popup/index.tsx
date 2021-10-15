import React, { useContext } from 'react';

import { ModalBackground, ModalContainer } from './styles';
import { TasksContext } from '../../TasksContext';
import { PopupContext } from '../../PopupContext';

const Popup: React.FC = () => {
  const { delTask } = useContext(TasksContext);
  const { id, name, popupstats, setPopupStatus } = useContext(PopupContext);

  const handleDeleteTask = () => {
    delTask(id);
    setPopupStatus(false);
  };

  return (
    <ModalBackground isOpen={popupstats}>
      <ModalContainer isOpen={popupstats}>
        <p>Are you sure you want to delete the following Task:</p>
        <p> - {name}</p>
        <div>
          <button type="button" onClick={() => setPopupStatus(false)}>
            Cancel
          </button>
          <button type="button" onClick={handleDeleteTask}>
            Confirm
          </button>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Popup;
