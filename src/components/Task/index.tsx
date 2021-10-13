import React, { useState, useCallback, useContext } from 'react';
import { BsDot } from 'react-icons/bs';
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import moment from 'moment';

import { TasksContext } from '../../TasksContext';
import Dropdown from '../Dropdown';
import {
  TaskContainer,
  TaskHeader,
  Info,
  OpenButton,
  TaskBody,
  TimePickerContainer,
  ButtonsContainer,
  DeleteButton,
  SaveButton,
} from './styles';

import { TaskProps } from '../../types';

interface ITaskProps {
  statusList: string[];
  data: TaskProps;
}

const Task: React.FC<ITaskProps> = ({ statusList, data }) => {
  const { updateTask, delTask } = useContext(TasksContext);
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

  const handleDeleteTask = () => {
    delTask(data.id);
  };

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
  };

  const handleStatusChange = useCallback((stats: string) => {
    setSelectedStatus(stats);
  }, []);

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
              showNow={false}
              allowClear={false}
              value={moment.utc(moment.duration(selectedTime).asMilliseconds())}
              format="HH:mm"
              onChange={t => {
                setSelectedTime(
                  moment.duration(moment(t).format('HH:mm'), 'minutes'),
                );
              }}
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
          <DeleteButton type="button" onClick={handleDeleteTask}>
            Delete Task
          </DeleteButton>
          <SaveButton type="button" onClick={handleSaveTask}>
            Save Task
          </SaveButton>
        </ButtonsContainer>
      </TaskBody>
    </TaskContainer>
  );
};

export default Task;