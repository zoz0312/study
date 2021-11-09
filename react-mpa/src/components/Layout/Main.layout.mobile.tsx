import React from 'react';

export const MainLayoutMobile: React.FC = ({
  children
}) => {
  return (
    <>
      <head>MainLayoutMobile HEAD</head>
      <div>
        { children }
      </div>
      <footer>MainLayoutMobile Footer</footer>
    </>
  )
}