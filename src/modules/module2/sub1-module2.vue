<template>
  <div>
    <demo-error-modal/>
    <demo-login-modal/>
    <demo-dog-profile-modal />
    <demo-conditional-modal/>
    <demo-focus-modal/>
    <create-modal/>

    <v-dialog
      @before-opened="dialogEvent('before-open')"
      @before-closed="dialogEvent('before-close')"
      @opened="dialogEvent('opened')"
      @closed="dialogEvent('closed')" />

    <modal
      name="example-modal"
      transition="nice-modal-fade"
      :min-width="200"
      width="500"
      :height="500"
      :min-height="200"
      :delay="100"
      :adaptive="adaptive"
      :resizable="resizable"
      :draggable="draggable">
      <div class="example-modal-content">
        Appropriately exploit professional infrastructures rather than unique growth strategies. Assertively build leveraged growth strategies vis-a-vis multimedia based vortals. Progressively simplify cross-platform value through interactive imperatives. Objectively implement enabled web services after plug-and-play ROI. Distinctively impact inexpensive schemas before installed base imperatives. Holisticly benchmark pandemic process improvements without wireless experiences. Efficiently create worldwide partnerships after tactical vortals. Uniquely productize enabled platforms vis-a-vis timely processes. Conveniently unleash standards compliant niches through highly efficient testing procedures. Rapidiously enable pandemic niche markets whereas viral markets. Assertively simplify alternative partnerships and error-free e-commerce. Professionally formulate 24/365 internal or "organic" sources through equity invested mindshare. Globally redefine unique best practices for.

        <input placeholder="Email">
      </div>
    </modal>

    <h2>Vue.js Modal
      <a
        href="https://github.com/euvl/vue-js-modal/blob/master/README.md"
        target="readme">Readme</a>
      <a
        href="https://github.com/euvl/vue-js-modal/issues"
        target="issues">Issues</a>
    </h2>

    <pre style="line-height: 1.5;">
      npm install --save vue-js-modal

      ...
      import vmodal from 'vue-js-modal'
      Vue.use(vmodal)
    </pre>

    <modes-table />

    <div
      style="margin-top: 20px;
			margin-bottom: 15px;">
      <el-button
        type="primary"
        @click="show(false, false, false)">Simple</el-button>
      <el-button
        type="primary"
        @click="show(true, false, false)">Resizable</el-button>
      <el-button
        type="primary"
        @click="show(false, true, false)">Adaptive</el-button>
      <el-button
        type="primary"
        @click="show(false, false, true)">Draggable</el-button>
      <br>
      <el-button
        type="primary"
        @click="$modal.show('dog-profile')">
        Demo: Dog Profile photo
      </el-button>
      <el-button
        type="primary"
        @click="$modal.show('error-modal')">
        Demo: Error handling
      </el-button>
      <el-button
        type="primary"
        @click="$modal.show('demo-login')">
        Demo: Login
      </el-button>
      <el-button
        type="primary"
        @click="$modal.show('size-modal')">
        create-modal
      </el-button>
      <el-button
        :class="canBeShown ? 'btn green' : 'btn red'"
        @click="conditionalShow">
        Can <b v-if="!canBeShown">NOT</b> be shown
      </el-button>
      <br>

      <el-button
        type="primary"
        @click="showBasicDialog">
        Dialog: basic
      </el-button>

      <el-button
        type="primary"
        @click="showTitleDialog">
        Dialog: title
      </el-button>

      <el-button
        type="primary"
        @click="showButtonsDialog">
        Dialog: buttons
      </el-button>
    </div>
  </div>

</template>

<script>
import ModesTable from '../../components/common/modal/ModesTable.vue';
import DemoErrorModal from '../../components/common/modal/DemoErrorModal.vue';
import DemoFocusModal from '../../components/common/modal/InputFocusModal.vue';
import DemoLoginModal from '../../components/common/modal/DemoLoginModal.vue';
import DemoDogProfileModal from '../../components/common/modal/DogProfileModal.vue';
import DemoConditionalModal from '../../components/common/modal/ConditionalModal.vue';
import CreateModal from './create.modal.vue';

// import { Module2Srv } from './module2.service';

export default {
  components: {
    ModesTable,
    DemoErrorModal,
    DemoFocusModal,
    DemoLoginModal,
    DemoDogProfileModal,
    DemoConditionalModal,
    CreateModal
  },
  data() {
    return {
      resizable: false,
      adaptive: false,
      draggable: false,
      canBeShown: false
    };
  },
  created() {
    setInterval(() => {
      this.canBeShown = !this.canBeShown;
    }, 5000);
  },
  methods: {
    show(resizable, adaptive, draggable) {
      this.resizable = resizable;
      this.adaptive = adaptive;
      this.draggable = draggable;
      /*
				  $nextTick is required because the data model with new
				  "resizable, adaptive, draggable" values is not updated yet.. eh
				*/
      this.$nextTick(() => {
        this.$modal.show('example-modal');
      });
    },

    conditionalShow() {
      this.$modal.show('conditional-modal', {
        show: this.canBeShown
      });
    },

    showBasicDialog() {
      this.$modal.show('dialog', {
        text: 'I am a tiny dialog box.<br/>And I render <b>HTML!</b>'
      });
    },

    showTitleDialog() {
      this.$modal.show('dialog', {
        title: 'Information',
        text: 'Check out, I have a title 😎'
      });
    },

    showButtonsDialog() {
      this.$modal.show('dialog', {
        title: 'Buttons example',
        text: 'You can add an arbitrary number of buttons.',
        buttons: [{
          title: 'C💩NCEL',
          handler: () => {
            this.$modal.hide('dialog');
          }
        },
        {
          title: 'LIKE',
          default: true,
          handler: () => {
            alert('LIKE LIKE LIKE');
          }
        },
        {
          title: 'REPOST',
          handler: () => {
            alert('REPOST REPOST REPOST');
          }
        }
        ]
      });
    },

    dialogEvent(eventName) {
      console.log(`Dialog event: ${eventName}`);
    }
  },
};
</script>

<style scoped>

</style>
