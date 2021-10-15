import { createContext, useState } from 'react';

import { PopupContextData, PopupProviderProps } from './types';

export const PopupContext = createContext<PopupContextData>(
  {} as PopupContextData,
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const PopupProvider = ({ children }: PopupProviderProps) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [popupstats, setPopupstats] = useState(false);

  const updatePopup = (taskId: number, nameId: string) => {
    setId(taskId);
    setName(nameId);
  };

  const setPopupStatus = (stats: boolean) => {
    setPopupstats(stats);
  };

  return (
    <PopupContext.Provider
      value={{ id, name, popupstats, updatePopup, setPopupStatus }}
    >
      {children}
    </PopupContext.Provider>
  );
};
