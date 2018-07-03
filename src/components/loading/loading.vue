<template>
<!-- <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
    </div> -->
<!-- <div class="loading-text">{{text}}</div> -->

<transition name="fade">
  <div v-if="!willRemove" v-show="visible" class="el-loading-mask" :style="{ backgroundColor: background || ''}" :class="[customClass, { 'is-fullscreen': fullscreen }]">
    <div class="el-loading-spinner">
      <div class="loading-content">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <i v-else :class="spinner"></i>
        <span v-if="text" class="el-loading-text">{{ text }}</span>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    text: String,
    mask: {
      type: Boolean,
      default: false
    },
    spinner: null,
    // background: null,
    fullscreen: {
      type: Boolean,
      default: true
    },
    customClass: String,
    visible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      willRemove: false
    }
  },
  computed: {
    background () {
      return this.mask ? '' : 'transparent'
    }
  },
  watch: {
    visible (val) {
      val ? this.show() : this.hide()
    }
  },
  methods: {
    show () {
      this.$emit('update:visible', true)
    },
    hide () {
      this.$emit('update:visible', false)
    },
    handleAfterLeave () {
      this.$emit('after-leave')
    },
    setText (text) {
      this.text = text
    },
    remove (cb) {
      this.willRemove = true
      cb && cb()
    }
  }
}
</script>

<style lang="less">
.el-loading-mask {
	position: absolute;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.1);
	margin: 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: opacity 0.3s;
	&.is-fullscreen {
		position: fixed;
	}
}

.el-loading-spinner {
	top: 48%;
	// margin-top: -21px;
	width: 100%;
	text-align: center;
	position: absolute;

	.circular {
		height: 24px;
		width: 24px;
		animation: loading-rotate 2s linear infinite;

		.path {
			animation: loading-dash 1.5s ease-in-out infinite;
			stroke-dasharray: 90, 150;
			stroke-dashoffset: 0;
			stroke-width: 2;
			stroke: #409eff;
			stroke-linecap: round;
		}
	}

	.loading-content {
		background: rgba(255, 255, 255, 0.85);
		box-shadow: 0 2px 4px 0 rgba(213, 218, 227, 0.5);
		border-radius: 2px;
		display: inline-block;
		padding: 8px 15px;
	}
}

.el-loading-text {
	display: inline-block;
	font-size: 14px;
	margin-left: 15px;
	color: #666666;
	vertical-align: middle;
	margin-top: -15px;
}

i {
	color: #409eff;
}

@keyframes loading-rotate {
	100% {
		transform: rotate(360deg);
	}
}

@keyframes loading-dash {
	0% {
		stroke-dasharray: 40, 200;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -40px;
	}
	100% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -120px;
	}
}
</style>
