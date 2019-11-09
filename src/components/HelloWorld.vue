<template>
    <div id="calculator_base">
        <div id="cal_block">
        <div id="display">
          <div class="display_main"><span id="cal_main">{{display_}}</span></div>
          <div class="display_main"><span id="cal_main">{{answer_}}</span></div>
        </div>
        </div>
    <div id="nonCal_block">
    <div id="nonCal_main">
    <div id="btn_box">
    <div id="Row">
    <div id="pannel_box"><btn-component7 id="pannel"/></div>
    <div id="pannel_box"><btn-component4 id="pannel"/></div>
    <div id="pannel_box"><btn-component1 id="pannel"/></div>
    <div id="pannel_box"><btn-component-dot id="pannel"/></div>
    </div>
    <div id="Row">
    <div id="pannel_box"><btn-component8 id="pannel"/></div>
    <div id="pannel_box"><btn-component5 id="pannel"/></div>
    <div id="pannel_box"><btn-component2 id="pannel"/></div>
    <div id="pannel_box"><btn-component0 id="pannel"/></div>
    </div>
    <div id="Row">
    <div id="pannel_box"><btn-component9 id="pannel"/></div>
    <div id="pannel_box"><btn-component6 id="pannel"/></div>
    <div id="pannel_box"><btn-component3 id="pannel"/></div>
    <div id="pannel_box"><btn-component00 id="pannel"/></div>
    </div>
    <div id="Row">
    <div id="pannel_box"><btn-component-c id="pannel"/></div>
    <div id="pannel_box"><btn-component-bar id="pannel"/></div>
    <div id="pannel_box"><btn-component-minus id="pannel"/></div>
    <div id="pannel_box"><btn-component-iko id="pannel_iko"/></div>
    </div>
    <div id="Row">
    <div id="pannel_box"><btn-component-ac id="pannel"/></div>
    <div id="pannel_box"><btn-component-root id="pannel"/></div>
    <div id="pannel_box"><btn-component-multi id="pannel"/></div>
    <div id="pannel_box"><btn-component-plus id="pannel"/></div>
    </div>
    </div>
    </div>
    </div>
     </div>
</template>

<script>
import BtnComponent7 from './caluculate/btn_components7.vue'
import BtnComponent1 from './caluculate/btn_components1.vue'
import BtnComponent2 from './caluculate/btn_components2.vue'
import BtnComponent3 from './caluculate/btn_components3.vue'
import BtnComponent4 from './caluculate/btn_components4.vue'
import BtnComponent5 from './caluculate/btn_components5.vue'
import BtnComponent6 from './caluculate/btn_components6.vue'
import BtnComponent8 from './caluculate/btn_components8.vue'
import BtnComponent9 from './caluculate/btn_components9.vue'
import BtnComponent0 from './caluculate/btn_components0.vue'
import BtnComponentMinus from './caluculate/btn_componentsMinus.vue'
import BtnComponentPlus from './caluculate/btn_componentsPlus.vue'
import BtnComponentMulti from './caluculate/btn_componentsMulti.vue'
import BtnComponentBar from './caluculate/btn_componentsBar.vue'
import BtnComponentDot from './caluculate/btn_componentsDot.vue'
import BtnComponent00 from './caluculate/btn_components00.vue'
import BtnComponentIko from './caluculate/btn_componentsIko.vue'
import BtnComponentAc from './caluculate/btn_componentsAc.vue'
import BtnComponentC from './caluculate/btn_componentsC.vue'
import BtnComponentRoot from './caluculate/btn_componentsRoot.vue'
import {mapState} from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: mapState({
    answer_: 'answer',
    display_: 'display'
  }),
  methods: {
  },
  components: {
    BtnComponent7,
    BtnComponent1,
    BtnComponentMinus,
    BtnComponentPlus,
    BtnComponentBar,
    BtnComponentDot,
    BtnComponent00,
    BtnComponentIko,
    BtnComponentAc,
    BtnComponentC,
    BtnComponentRoot,
    BtnComponent2,
    BtnComponent0,
    BtnComponent3,
    BtnComponent4,
    BtnComponent5,
    BtnComponent6,
    BtnComponent9,
    BtnComponent8,
    BtnComponentMulti
  }
}
</script>

<style scoped>
#calculator_base {
  height: 650px;
  width: 300px;
  background-color: black;
  margin: 0px;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  padding-left:2.5%;
  padding-right:2.5%;
}
#cal_block {
  color: white;
  height: 30%;
  width: 100%;
  margin: 0%;
  padding-bottom:2.5%;
  padding-top:0px;
  padding-left:0px;
  padding-right:0px;
}
#nonCal_block {
  height: 68.9%;
  width: 100%;
  margin: 0%;
  color: white;
  padding: 0%;
}
#display {
  width: 100%;
  height: 100%;
  background-color: #232323;
  padding: 0px;
  margin: 0px;
  text-align: right;
}
.display_main {
  padding: 0px;
  margin: 0px;
  height: 50%;
}
#nonCal_main{
  width: 100%;
  height: 100%;
  background-color: #232323;
  padding: 0px;
  margin: 0px;
  display: inline-flex;
  flex-flow: row;
}
#btn_box {
  width: 100%;
  margin: 0%;
  height: 100%;
  background-color: #232323;
  padding: 0px;
  display: inline-flex;
  flex-flow: row nowrap;
}
#Row {
  width: 20%;
  height: 100%;
  text-align: center;
  margin: 0px;
  background-color: #232323;
}
#pannel_box{
  padding:auto;
  margin: 0%;
  height: 22.8%;
  padding-top:12px;
  padding-left: 3px;
  padding-right: 3px;
  font-size:250%;
  font-weight: 900;
}
#cal_main{
  font-size: 250%;
  margin: 0px 3% 0px 0px;
}
</style>
