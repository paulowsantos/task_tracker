import React, { useContext } from 'react';

import { ModalBackground, ModalContainer } from './styles';
import { TasksContext } from '../../utils/TasksContext';
import { PopupContext } from '../../utils/PopupContext';
import Button from '../Button';

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
        <p>Are you sure you want to delete the following Task?</p>
        <p> - {name}</p>
        <div>
          <Button
            width="45%"
            height="30px"
            background="#999"
            onClick={() => setPopupStatus(false)}
          >
            Cancel
          </Button>
          <Button
            width="45%"
            height="30px"
            background="#D11A2A"
            onClick={handleDeleteTask}
          >
            Delete
          </Button>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Popup;
