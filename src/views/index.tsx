import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import type { FC } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import { LoadingSpin } from '@/components/LoadingSpin';
import { Router } from '@/router';
import { Header } from '@/components/Header';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/store';

import styles from './index.module.less';

const MainView: FC = () => {
  const { theme } = useAppSelector((state) => state.global);

  useActions();

  return (
    <ConfigProvider theme={theme} locale={zhCN}>
      <BrowserRouter>
        <Header />
        <div className={styles.routerView}>
          <Suspense fallback={<LoadingSpin />}>
            <Router />
          </Suspense>
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default MainView;
