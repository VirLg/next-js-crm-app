import React from 'react';

export interface ToolBarProps {
  children: React.ReactNode;
}

const ToolBar = ({ children }: ToolBarProps) => {
  return <div>{children}</div>;
};

export default ToolBar;
