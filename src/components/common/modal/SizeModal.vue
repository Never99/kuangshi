<template>
  <modal
    name="size-modal"
    transition="nice-modal-fade"
    classes="demo-modal-class"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.2"
    :pivot-x="0.5"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    :width="width"
    :height="height"
    @before-open="beforeOpen"
    @opened="opened"
    @closed="closed"
    @before-close="beforeClose">
    <div
      class="size-modal-content"
      style="overflow: auto;">
      <el-button
        type="primary"
        @click="fullScreen()">全屏</el-button>
      <el-button
        type="primary"
        @click="closeSelf()">关闭</el-button>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum purus egestas libero ornare venenatis. Maecenas pharetra tortor eu tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam. Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci. Ut egestas nulla in vehicula feugiat.
      </div>

    </div>

  </modal>
</template>
<script>
export default {
  name: 'SizeModalTest',
  data() {
    return {
      paragraphs: [true],
      timer: null,
      width: '50%',
      height: '50%',
      isfull: false
    };
  },
  methods: {
    closeSelf() {
      this.width = '50%';
      this.height = '50%';
      this.$modal.hide('size-modal');
    },
    fullScreen() {
      if (this.isfull) {
        return;
      }

      this.width = '100%';
      this.height = '100%';
      this.$modal.hide('size-modal');
      window.setTimeout(() => {
        this.isfull = true;
        this.$modal.show('size-modal');
      }, 100);
    },
    beforeOpen() {
      this.timer = setInterval(() => {
        this.paragraphs.push(true);
      }, 0);
    },

    beforeClose() {
      clearInterval(this.timer);
      this.timer = null;
      this.paragraphs = [];
    },

    opened(e) {
      // e.ref should not be undefined here
      console.log('opened', e);
      console.log('ref', e.ref);
    },

    closed(e) {
      this.isfull = false;
      console.log('closed', e);
    }
  }
};
</script>
<style>
	.size-modal-content {
		padding: 10px;
		font-style: 13px;
	}

	.v--modal-overlay[data-modal="size-modal"] {
		background: rgba(0, 0, 0, 0.5);
	}

	.demo-modal-class {
		overflow: auto !important;
		background: #F7F7F7;
		box-shadow: 5px 5px 30px 0px rgba(46, 61, 73, 0.6);
	}
</style>
