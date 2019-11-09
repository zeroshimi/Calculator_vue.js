<template>
    <div id="pannel" :class="{non:over_btn!==true,over:over_btn}" @click="Dispaly_Num(btn_main)" @mouseover="Change" @mouseout="Change">
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
      btn_main: this.$store.state.CalNum_minus
    }
  },
  methods: {
    AllClear () {
      this.CalNum = 0
    },
    Change () {
      if (this.over_btn !== true) {
        this.over_btn = true
      } else {
        this.over_btn = false
      }
    },
    Dispaly_Num (str) {
      this.$store.commit('DisplayNum', str)
    }
  }
}
</script>

<style>
#pannel_box{
  padding:auto;
  margin: 0%;
  height: 100%;
  padding-top:12px;
  padding-left: 3px;
  padding-right: 3px;
  font-size:250%;
  font-weight: 900;
}
#pannel.non {
  height: 75%;
  margin: 0%;
  background-color: orange;
  border-radius: 100px;
}
#pannel.over {
  margin: 0%;
  height: 75%;
  background-color: rgba(255, 166, 0, 0.591);
  border-radius: 100px;
}
.btn {
  margin-top: 20px;
}
.CalNum {
  color: white;
}
</style>
