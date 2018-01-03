export default [{
  path: '/',
  name: 'layout',
  redirect: '/module1/sub1',
  component: (resolve) => {
    require(['./layout'], resolve);
  }

}];
