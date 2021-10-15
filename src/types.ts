import { ReactNode } from 'react';
import moment from 'moment';

export interface TaskProps {
  id: number;
  taskname: string;
  desc: string;
  estimate: moment.Duration;
  status: string;
}

export type TaskInput = Omit<TaskProps, 'id'>;

export interface TasksProviderProps {
  children: ReactNode;
}

export interface TasksContextData {
  tasksList: TaskProps[];
  updateTask: (task: TaskProps) => Promise<void>;
  addTask: (task: TaskInput) => Promise<void>;
  delTask: (taskId: number) => Promise<void>;
}

export interface PopupProviderProps {
  children: ReactNode;
}

export interface PopupContextData {
  id: number;
  name: string;
  popupstats: boolean;
  updatePopup: (taskId: number, nameId: string) => void;
  setPopupStatus: (stats: boolean) => void;
}
