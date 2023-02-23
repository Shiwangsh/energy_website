import { ReactElement } from 'react';
import { NextPage } from 'next';

type LayoutProps = {
  children: ReactElement;
};

type GetLayout = (page: ReactElement) => ReactElement;

type PageLayoutType = {
  getLayout?: GetLayout;
} & NextPage<LayoutProps>;

export default PageLayoutType;
