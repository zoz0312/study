import React from 'react';

export const MainLayoutPcweb: React.FC = ({
  children
}) => {
  return (
    <>
      <head>HEAD</head>
      <div>
        { children }
      </div>
      <footer>Footer</footer>
    </>
  );
}