export default [{
  path: '/login',
  name: 'login',
  component: (resolve) => {
    require(['./login'], resolve);
  }

}];
