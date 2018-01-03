import Layout from '../layout/layout';

export default [{
  path: '/module1',
  name: 'module1',
  component: Layout,
  hidden: true,
  redirect: '/module1/sub1',
  children: [{
    path: 'sub1',
    component: (resolve) => {
      require(['./sub1-module1'], resolve);
    }
  }, {
    path: 'sub2',
    component: (resolve) => {
      require(['./sub2-module1'], resolve);
    }
  }]

}];
