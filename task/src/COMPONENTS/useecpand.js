import { useState } from 'react';

export const useExpand = () => {
  const [isActive, setIsActive] = useState(false);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(true);

  const expand = () => {
    setIsActive(!isActive);
    setRight(!right);
    setLeft(!left);
  };

  const divClassName = `${isActive ? 'active' : ''} movi my-3 border border-5 border-warning d-inline-flex position-relative`;

  return { expand, divClassName, isActive, right, left };
};