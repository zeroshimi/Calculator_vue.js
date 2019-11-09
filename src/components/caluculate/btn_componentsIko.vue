<template>
    <div :class="{non:over_btn!==true,over:over_btn}" @click="display" @mouseover="Change" @mouseout="Change">
        <span id="btn" class="CalNum">
        {{btn_main}}
        </span>
    </div>
</template>

<script>
export default {
  name: 'btn',
  data () {
    return {
      over_btn: false,
      btn_main: this.$store.state.CalNum_iko
    }
  },
  methods: {
    Change () {
      if (this.over_btn !== true) {
        this.over_btn = true
      } else {
        this.over_btn = false
      }
    },
    display () {
      this.$store.commit('displayAnswer')
      this.$store.dispatch('math')
    }
  }
}
</script>

<style>
#pannel_iko.non {
  height: 75%;
  margin: 0%;
  background-color: #FF3300;
  border-radius: 100px;
}
#pannel_iko.over {
  margin: 0%;
  height: 75%;
  background-color: rgba(255, 51, 0, 0.591);
  border-radius: 100px;
}
.btn {
  margin-top: 20px;
}
.CalNum {
  color: white;
}
</style>
