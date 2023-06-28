import * as React from 'react';
import Header from "./Header";
export const Layout = ({ children }) => {
  return (
    <>
        <Header/>
        <div>{children}</div> 
     </>
  );
};

export default Layout;

