import Layout from '../layout/layout';

export default [{
  path: '/module2',
  name: 'module2',
  component: Layout,
  redirect: '/module2/sub1',
  hidden: true,
  children: [{
    path: 'sub1',
    component: (resolve) => {
      require(['./sub1-module2'], resolve);
    }
  }, {
    path: 'sub2',
    component: (resolve) => {
      require(['./sub2-module2'], resolve);
    }
  }]

}];
