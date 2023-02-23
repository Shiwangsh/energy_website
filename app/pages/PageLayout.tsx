import PageLayout from '../types/PageLayoutType';
import { ReactElement } from 'react';
// import '../styles/globals.css';

const PageLayout: PageLayout = ({ children }) => {
  return <div>{children}</div>;
};

PageLayout.getLayout = function getLayout(page: ReactElement) {
  return <div className="border-2 border-sky-500 m-8">{page}</div>;
};

export default PageLayout;
