import Vue from 'vue';

Vue.directive('bgColor', {
  bind(el, binding) {
    $(el).css('background', '#FF3D00'); // eslint-disable-line
    console.log(binding);
  },
  update(el, val) {
    $(el).css('background', val.value.color.bgcolor); // eslint-disable-line
  },
  unbind() {
    // 清理工作
    // 例如，删除bind()添加的事件监听器
  }
});
