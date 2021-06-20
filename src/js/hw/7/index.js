import t1 from './tasks/1';
import t2 from './tasks/2';
import t3 from './tasks/3';

export default () => {
  t1();
  t2();
  t3({ open: true });
};
