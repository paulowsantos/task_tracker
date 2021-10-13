import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { Container, Header } from './styles';

interface DropdownProps {
  title: string;
  list: string[];
  handleSelectChange(stats: string): void;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  list,
  handleSelectChange,
}) => {
  const [listOpen, setListOpen] = useState(false);

  const SelectChange = (item: string) => {
    handleSelectChange(item);
    setListOpen(!listOpen);
  };

  return (
    <Container listOpen={listOpen}>
      <Header type="button" onClick={() => setListOpen(!listOpen)}>
        <div>{title}</div>
        {listOpen ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
      </Header>
      <ul>
        {list.map(item => (
          <li key={item}>
            <button
              type="button"
              onClick={() => SelectChange(item)}
              onKeyDown={() => SelectChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Dropdown;
