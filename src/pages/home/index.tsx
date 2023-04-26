import styles from './index.less';
import { useIntl, setLocale, getLocale } from 'umi';
import { Button } from 'antd';
import { login } from '@/services/home/api';

export default function IndexPage() {
  const intl = useIntl();
  return (
    <div>
      <h1 className={styles.title}>home</h1>
      <h1>{intl.formatMessage({ id: 'app.home.title' })}</h1>
      <Button
        onClick={() => {
          setLocale(getLocale() === 'en-US' ? 'zh-CN' : 'en-US', false);
        }}
      >
        change
      </Button>
      999
      <Button
        onClick={() => {
          login({
            username: 'yiqi186@126.com',
            password: 'Miotech123456',
          }).then((res) => {
            console.log('res: ', res);
          });
        }}
      >
        {' '}
        log in
      </Button>
    </div>
  );
}
