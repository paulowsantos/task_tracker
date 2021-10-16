import React, { useState, useCallback, useContext } from 'react';
import { BsDot } from 'react-icons/bs';
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import moment from 'moment';

import { TasksContext } from '../../utils/TasksContext';
import { PopupContext } from '../../utils/PopupContext';
import Dropdown from '../Dropdown';
import Button from '../Button';

import {
  TaskContainer,
  TaskHeader,
  Info,
  OpenButton,
  TaskBody,
  TimePickerContainer,
  TimePickerFooter,
  ButtonsContainer,
} from './styles';

import { TaskProps } from '../../utils/types';

interface ITaskProps {
  statusList: string[];
  data: TaskProps;
}

const Task: React.FC<ITaskProps> = ({ statusList, data }) => {
  const { updateTask } = useContext(TasksContext);
  const { setPopupStatus, updatePopup } = useContext(PopupContext);
  const [isDetailsOpen, setDetailsState] = useState(false);
  const [selectedTime, setSelectedTime] = useState<moment.Duration>(
    data.estimate,
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(data.status);
  const [taskName, setTaskName] = useState<string>(data.taskname);
  const [taskDescription, setTaskDescription] = useState<string>(data.desc);
  const [taskNameDisplay, setTaskNameDisplay] = useState<string>(data.taskname);
  const [taskEstDisplay, setTaskEstDisplay] = useState<string>(
    moment.utc(moment.duration(data.estimate).asMilliseconds()).format('HH:mm'),
  );

  const handleSaveTask = async () => {
    setTaskNameDisplay(taskName);
    setTaskEstDisplay(
      moment
        .utc(moment.duration(selectedTime).asMilliseconds())
        .format('HH:mm'),
    );

    await updateTask({
      id: Number(data.id),
      taskname: taskName,
      desc: taskDescription,
      estimate: selectedTime,
      status: selectedStatus,
    });

    setDetailsState(false);
  };

  const handleDeleteTask = () => {
    updatePopup(Number(data.id), taskNameDisplay);
    setPopupStatus(true);
  };

  const handleStatusChange = useCallback((stats: string) => {
    setSelectedStatus(stats);
  }, []);

  const teste = () => {
    return (
      <TimePickerFooter>
        <span>Hr.</span>
        <span>Min.</span>
      </TimePickerFooter>
    );
  };

  return (
    <TaskContainer>
      <TaskHeader onClick={() => setDetailsState(!isDetailsOpen)}>
        <Info>
          <div>
            <BsDot size={30} />
            <span>{taskNameDisplay}</span>
          </div>
          <span>{taskEstDisplay}</span>
        </Info>
        <OpenButton
          isOpen={isDetailsOpen}
          onClick={() => setDetailsState(!isDetailsOpen)}
        >
          <span aria-hidden="true" />
        </OpenButton>
      </TaskHeader>
      <TaskBody isOpen={isDetailsOpen}>
        <div>
          <span>Task Name:</span>
          <input
            placeholder="Name"
            onChange={e => setTaskName(e.target.value)}
            value={taskName}
          />
          <span>Description:</span>
          <textarea
            placeholder="Description"
            onChange={e => setTaskDescription(e.target.value)}
            value={taskDescription}
          />
          <span>Estimate:</span>
          <TimePickerContainer isOpen={isDetailsOpen}>
            <TimePicker
              inputReadOnly
              showNow={false}
              allowClear={false}
              value={moment.utc(moment.duration(selectedTime).asMilliseconds())}
              format="HH:mm"
              onSelect={t => {
                setSelectedTime(
                  moment.duration(moment(t).format('HH:mm'), 'minutes'),
                );
              }}
              renderExtraFooter={teste}
            />
          </TimePickerContainer>
          <span>Status:</span>
          <Dropdown
            title={selectedStatus}
            list={statusList}
            handleSelectChange={handleStatusChange}
          />
        </div>
        <ButtonsContainer>
          <Button
            width="45%"
            height="40px"
            background="#D11A2A"
            onClick={handleDeleteTask}
          >
            Delete Task
          </Button>
          <Button
            width="45%"
            height="40px"
            background="#e8bc28"
            onClick={handleSaveTask}
          >
            Save Task
          </Button>
        </ButtonsContainer>
      </TaskBody>
    </TaskContainer>
  );
};

export default Task;
