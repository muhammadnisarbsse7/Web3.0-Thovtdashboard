// src/components/ListItem.tsx
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface ListItemProps {
  mainText: string;
  subText: string;
  date: string;
}

const ListItem: React.FC<ListItemProps> = ({ mainText, subText, date }) => {
  return (
    <div className="flex justify-between items-center p-4  border-b border-gray-300">
      <div>
        <div className="text-lg font-bold">{mainText}</div>
        <div className="text-green-500">{subText}</div>
      </div>
      <div className="text-right text-gray-500">
        <div>{date}</div>
      </div>
      <FaChevronRight className="text-gray-400 ml-2" />
    </div>
  );
};

export default ListItem;
