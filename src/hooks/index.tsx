import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<IProps> = ({ children }) => (
    <>
        {children}
    </>

);

export default AppProvider;
