import { Link } from 'react-router-dom';
import type { FC } from 'react';
import { Button, Spin } from 'antd';

import { useAppDispatch, useAppSelector } from '@/store';
import { isAdminSelector } from '@/store/user/selector';
import { changeThemeType } from '@/store/global/asyncAction';

import styles from './index.module.less';

export const Header: FC = () => {
  const dispatch = useAppDispatch();

  const [{ name, loading: userLoading }, { themeType, loading: globalLoading }] = useAppSelector(
    (state) => [state.user, state.global],
  );

  const isAdmin = useAppSelector(isAdminSelector);

  return (
    <header className={styles.header}>
      <div>
        <Link to="/" className={styles.logo}>
          home
        </Link>
        {isAdmin && <Link to="/manage">manage</Link>}
      </div>
      {userLoading || globalLoading ? (
        <Spin />
      ) : (
        <div>
          <Button
            type="primary"
            onClick={() => {
              dispatch(changeThemeType('default' === themeType ? 'dark' : 'default'));
            }}
          >
            切换主题
          </Button>
        </div>
      )}
      user: {name}
    </header>
  );
};
