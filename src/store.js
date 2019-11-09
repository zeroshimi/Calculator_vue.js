import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CalNumStr: 'Input Here',
    CalNum_1: '1',
    CalNum_2: '2',
    CalNum_3: '3',
    CalNum_4: '4',
    CalNum_5: '5',
    CalNum_6: '6',
    CalNum_7: '7',
    CalNum_8: '8',
    CalNum_9: '9',
    CalNum_0: '0',
    CalNum_00: '00',
    CalNum_iko: '=',
    CalNum_minus: '-',
    CalNum_multi: '×',
    CalNum_plus: '+',
    CalNum_bar: '÷',
    CalNum_Ac: 'Ac',
    CalNum_root: '√',
    CalNum_c: 'c',
    CalNum_dot: '.',
    review: 'reviews',
    pre: 'Answer here',
    over_btn: false,
    answerNum: '',
    RootChecker1: 0,
    RootChecker2: 0,
    MarkChecker: 0,
    i: 0,
    j: 0,
    i1: 0,
    i2: 0,
    num1: 0,
    num2: 0,
    display: 'Input Here',
    answer: 'Answer here'
  },
  getters: {
  },
  mutations: {
    Input (state) {
      state.CalNumStr = '1'
    },
    output (state) {
      window.alert(state.CalNumStr)
    },
    Change (state) {
      state.over_btn = !state.over_btn
    },
    DisplayNum (state, str) {
      if (state.display === 'Input Here') {
        if (str === '.') {
          state.display = '0.'
          state.answerNum = '0.'
        } else if (str === '00') {
          state.display = 'Input Here'
          state.answerNum = ''
        } else if (str === '√') {
          state.display = str
          state.answerNum = ''
          state.RootChecker1 = 1
        } else {
          state.display = str
          state.answerNum = str
        }
      } else if ((state.answer !== 'Answer here') && (state.answer !== '')) {
        if (str === '×') {
          state.display = 'Answer' + str
          state.num1 = parseFloat(state.answer)
          state.MarkChecker = 3
          state.answerNum = 0
        } else if (str === '÷') {
          state.display = 'Answer' + str
          state.num1 = parseFloat(state.answer)
          state.MarkChecker = 4
          state.answerNum = 0
        } else if (str === '+') {
          state.display = 'Answer' + str
          state.num1 = parseFloat(state.answer)
          state.MarkChecker = 1
          state.answerNum = 0
        } else if (str === '-') {
          state.display = 'Answer' + str
          state.num1 = parseFloat(state.answer)
          state.MarkChecker = 2
          state.answerNum = 0
        } else if (str === '√') {
          state.display = str + 'Answer'
          state.RootChecker1 = 1
          state.num1 = parseFloat(state.answer)
          state.answerNum = 0
        } else {
          state.display = str
          state.answerNum = state.answerNum + str
        }
      } else {
        if (str === '×') {
          state.display = state.display + str
          state.num1 = parseFloat(state.answerNum)
          state.MarkChecker = 3
          state.answerNum = 0
        } else if (str === '÷') {
          state.display = state.display + str
          state.num1 = parseFloat(state.answerNum)
          state.MarkChecker = 4
          state.answerNum = 0
        } else if (str === '+') {
          state.display = state.display + str
          state.num1 = parseFloat(state.answerNum)
          state.MarkChecker = 1
          state.answerNum = 0
        } else if (str === '-') {
          state.display = state.display + str
          state.num1 = parseFloat(state.answerNum)
          state.MarkChecker = 2
          state.answerNum = 0
        } else if ((str === '√') && (state.MarkChecker !== 0)) {
          state.RootChecker2 = 1
          state.display = state.display + str
          state.num1 = parseFloat(state.answerNum)
          state.answerNum = 0
        } else if (str === '√') {
          state.RootChecker1 = 1
          state.display = state.display + '×' + str
          state.num1 = parseFloat(state.answerNum)
          state.MarkChecker = 3
          state.answerNum = 0
        } else {
          state.display = state.display + str
          state.answerNum = state.answerNum + str
        }
      }
    },
    methodsMath (state) {
      state.i1 = 0
      state.i2 = 0
      state.i = 0
      state.j = 0
      if ((state.num2 === 0) && (state.MarkChecker === 0) && (state.RootChecker1 === 1)) {
        state.i1 = Math.sqrt(state.num1)
        state.i2 = state.i1 + Math.sqrt(state.num2)
        state.i = Math.floor(state.i2)
        state.j = state.i2 - state.i
        state.RootChecker1 = 0
        state.RootChecker2 = 0
        state.answer = state.i + (Math.round(state.j * 100000) / 100000)
        state.num1 = 0
        state.num2 = 0
        state.MarkChecker = 0
        state.RootChecker1 = 0
        state.RootChecker2 = 0
      } else if (state.MarkChecker === 1) {
        if ((state.RootChecker1 === 1) && (state.RootChecker2 === 1)) {
          state.i1 = Math.sqrt(state.num1)
          state.i2 = state.i1 + Math.sqrt(state.num2)
          state.i = Math.floor(state.i2)
          state.j = state.i2 - state.i
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          state.answer = state.i + (Math.round(state.j * 100000) / 100000)
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        } else if (state.RootChecker2 === 1) {
          state.i1 = Math.sqrt(state.num2)
          state.i2 = state.i1 + state.num1
          state.i = Math.floor(state.i2)
          state.j = state.i2 - state.i
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          state.answer = state.i + (Math.round(state.j * 100000) / 100000)
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        } else if (state.RootChecker1 === 1) {
          state.i1 = Math.sqrt(state.num1)
          state.i2 = state.i1 + state.num2
          state.i = Math.floor(state.i2)
          state.j = state.i2 - state.i
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          state.answer = state.i + (Math.round(state.j * 100000) / 100000)
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        } else {
          state.answer = state.num1 + state.num2
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        }
      } else if (state.MarkChecker === 3) {
        if ((state.RootChecker1 === 1) && (state.RootChecker2 === 1)) {
          state.i1 = Math.sqrt(state.num1)
          state.i2 = state.i1 * Math.sqrt(state.num2)
          state.i = Math.floor(state.i2)
          state.j = state.i2 - state.i
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          state.answer = state.i + (Math.round(state.j * 100000) / 100000)
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        } else if (state.RootChecker2 === 1) {
          state.i1 = Math.sqrt(state.num2)
          state.i2 = state.i1 * state.num1
          state.i = Math.floor(state.i2)
          state.j = state.i2 - state.i
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          state.answer = state.i + (Math.round(state.j * 100000) / 100000)
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        } else if (state.RootChecker1 === 1) {
          state.i1 = Math.sqrt(state.num1)
          state.i2 = state.i1 * state.num2
          state.i = Math.floor(state.i2)
          state.j = state.i2 - state.i
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          state.answer = state.i + (Math.round(state.j * 100000) / 100000)
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        } else {
          state.answer = state.num1 * state.num2
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        }
      } else if (state.MarkChecker === 2) {
        if ((state.RootChecker1 === 1) && (state.RootChecker2 === 1)) {
          state.i1 = Math.sqrt(state.num1)
          state.i2 = state.i1 - Math.sqrt(state.num2)
          state.i = Math.floor(state.i2)
          state.j = state.i2 - state.i
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          state.answer = state.i + (Math.round(state.j * 100000) / 100000)
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        } else if (state.RootChecker2 === 1) {
          state.i1 = Math.sqrt(state.num2)
          state.i2 = state.i1 - state.num1
          state.i = Math.floor(state.i2)
          state.j = state.i2 - state.i
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          state.answer = state.i + (Math.round(state.j * 100000) / 100000)
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        } else if (state.RootChecker1 === 1) {
          state.i1 = Math.sqrt(state.num1)
          state.i2 = state.i1 - state.num2
          state.i = Math.floor(state.i2)
          state.j = state.i2 - state.i
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          state.answer = state.i + (Math.round(state.j * 100000) / 100000)
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        } else {
          state.answer = state.num1 - state.num2
          state.num1 = 0
          state.num2 = 0
          state.MarkChecker = 0
          state.RootChecker1 = 0
          state.RootChecker2 = 0
        }
      } else if (state.MarkChecker === 4) {
        if (state.num2 === 0) {
          state.answer = 'Cant display'
        } else {
          if ((state.RootChecker1 === 1) && (state.RootChecker2 === 1)) {
            state.num1 = Math.sqrt(state.num1)
            state.num2 = Math.sqrt(state.num2)
          } else if (state.RootChecker1 === 1) {
            state.num1 = Math.sqrt(state.num1)
            state.num2 = state.num2
          } else if (state.RootChecker2 === 1) {
            state.num2 = Math.sqrt(state.num2)
          } else {
            state.num1 = state.num1
            state.num2 = state.num2
          }
          state.RootChecker1 = 0
          state.RootChecker2 = 0
          if (state.num1 % state.num2 === 0) {
            state.answer = state.num1 / state.num2
            state.num1 = 0
            state.num2 = 0
            state.MarkChecker = 0
            state.RootChecker1 = 0
            state.RootChecker2 = 0
          } else {
            state.i = Math.floor(state.num1 / state.num2)
            state.j = (state.num1 / state.num2) - state.i
            state.answer = state.i + (Math.round(state.j * 100000) / 100000)
            state.num1 = 0
            state.num2 = 0
            state.MarkChecker = 0
            state.RootChecker1 = 0
            state.RootChecker2 = 0
          }
        }
      } else {
        state.answer = 'Cant display'
        state.num1 = 0
        state.num2 = 0
        state.MarkChecker = 0
        state.RootChecker1 = 0
        state.RootChecker2 = 0
      }
    },
    displayAnswer (state) {
      if (state.num1 === 0) {
        state.num1 = parseFloat(state.answerNum)
      } else {
        state.num2 = parseFloat(state.answerNum)
      }
      state.answerNum = ''
    },
    Clear (state) {
      state.display = 'Input Here'
      state.answerNum = ''
    },
    AllClear (state) {
      state.display = 'Input Here'
      state.answerNum = ''
      state.answer = 'Answer here'
    }
  },
  actions: {
    math ({ commit }) {
      commit('methodsMath')
    }
  }
})
