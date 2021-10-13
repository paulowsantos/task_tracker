import React, { useState, useMemo, useContext, useEffect } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import moment from 'moment';

import { TasksContext } from '../../TasksContext';
import Task from '../../components/Task';
import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  Title,
  States,
  State,
  StateHeader,
  ListContainer,
} from './styles';

const MainPage: React.FC = () => {
  const { tasksList, addTask } = useContext(TasksContext);
  const statusList = ['Planned', 'In Progress', 'Completed'];

  const totalPlanDisplay = useMemo(() => {
    const filteredArray = tasksList.filter(
      item => item.status === statusList[0],
    );

    const estimatesArray = filteredArray.map(item => item.estimate);

    const totalDuration = estimatesArray.reduce(
      (a, b) => a.add(b),
      moment.duration(0),
    );
    return moment
      .utc(moment.duration(totalDuration).asMilliseconds())
      .format('HH:mm');
  }, [tasksList, statusList]);

  const totalProgDisplay = useMemo(() => {
    const filteredArray = tasksList.filter(
      item => item.status === statusList[1],
    );

    const estimatesArray = filteredArray.map(item => item.estimate);

    const totalDuration = estimatesArray.reduce(
      (a, b) => a.add(b),
      moment.duration(0),
    );
    return moment
      .utc(moment.duration(totalDuration).asMilliseconds())
      .format('HH:mm');
  }, [tasksList, statusList]);

  const totalCompDisplay = useMemo(() => {
    const filteredArray = tasksList.filter(
      item => item.status === statusList[2],
    );

    const estimatesArray = filteredArray.map(item => item.estimate);

    const totalDuration = estimatesArray.reduce(
      (a, b) => a.add(b),
      moment.duration(0),
    );
    return moment
      .utc(moment.duration(totalDuration).asMilliseconds())
      .format('HH:mm');
  }, [tasksList, statusList]);

  const handleAddTask = async () => {
    await addTask({
      taskname: 'New Task',
      desc: '',
      estimate: moment.duration(0),
      status: 'Planned',
    });
  };

  return (
    <Container>
      <Header>
        <div>
          <img src={logoImg} alt="Tracker" />
          <Title>Task Tracker</Title>
        </div>
        <button type="button" onClick={handleAddTask}>
          <BsPlusCircle size={30} />
          Add Task
        </button>
      </Header>
      <States>
        <State>
          <StateHeader>
            {statusList[0]}
            <span>Total: {totalPlanDisplay}</span>
          </StateHeader>
          <ListContainer>
            {tasksList.map(
              item =>
                item.status === statusList[0] && (
                  <Task key={item.id} statusList={statusList} data={item} />
                ),
            )}
          </ListContainer>
        </State>
        <State>
          <StateHeader>
            {statusList[1]}
            <span>Total: {totalProgDisplay}</span>
          </StateHeader>
          <ListContainer>
            {tasksList.map(
              item =>
                item.status === statusList[1] && (
                  <Task key={item.id} statusList={statusList} data={item} />
                ),
            )}
          </ListContainer>
        </State>
        <State>
          <StateHeader>
            {statusList[2]}
            <span>Total: {totalCompDisplay}</span>
          </StateHeader>
          <ListContainer>
            {tasksList.map(
              item =>
                item.status === statusList[2] && (
                  <Task key={item.id} statusList={statusList} data={item} />
                ),
            )}
          </ListContainer>
        </State>
      </States>
    </Container>
  );
};

export default MainPage;
