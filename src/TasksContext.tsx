import { createContext, useEffect, useState } from 'react';
import moment from 'moment';

// import api from './services/api';
import {
  TaskProps,
  TaskInput,
  TasksContextData,
  TasksProviderProps,
} from './types';

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData,
);

const initialTasks = [
  {
    id: 1,
    taskname: 'Implement Drag & Drop',
    desc: 'Implement functionality that allows the user to change the status of a task by simply dragging and dropping it.',
    estimate: moment.duration(210, 'minutes'),
    status: 'Planned',
  },
  {
    id: 2,
    taskname: 'Back-end Serverless',
    desc: 'Develop a serverless backend for the application with Create, Read, Update, and Delete functions.',
    estimate: moment.duration(400, 'minutes'),
    status: 'In Progress',
  },
  {
    id: 3,
    taskname: 'Responsive Layout',
    desc: 'Make the layout of the application fully responsive.',
    estimate: moment.duration(320, 'minutes'),
    status: 'In Progress',
  },
  {
    id: 4,
    taskname: 'Live demo',
    desc: 'Deploy this project to Github Pages.',
    estimate: moment.duration(20, 'minutes'),
    status: 'Completed',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasksList, setTasksList] = useState<TaskProps[]>([]);

  useEffect(() => {
    // api.get('tasks').then(response => setTasksList(response.data.tasks));
    setTasksList(initialTasks);
  }, []);

  const updateTask = async (taskUpdate: TaskProps) => {
    // const response = await api.patch(`tasks/${taskUpdate.id}`, taskUpdate);
    // const { tasks } = response.data;
    setTasksList(
      tasksList.map(item =>
        item.id === taskUpdate.id
          ? {
              ...item,
              taskname: taskUpdate.taskname,
              desc: taskUpdate.desc,
              estimate: taskUpdate.estimate,
              status: taskUpdate.status,
            }
          : item,
      ),
    );
  };

  const addTask = async (taskInput: TaskInput) => {
    // const response = await api.post('tasks', taskInput);
    // const { tasks } = response.data;

    // setTasksList([...tasksList, tasks]);
    const newId = Math.max(...tasksList.map(item => item.id), 0) + 1;

    const sortedList = [
      ...tasksList,
      {
        ...taskInput,
        id: newId,
      },
    ].sort((a, b) => b.id - a.id);

    setTasksList(sortedList);
  };

  const delTask = async (taskId: number) => {
    // await api.delete(`tasks/${taskId}`);
    setTasksList(tasksList.filter(item => item.id !== taskId));
  };

  return (
    <TasksContext.Provider value={{ tasksList, updateTask, addTask, delTask }}>
      {children}
    </TasksContext.Provider>
  );
};
