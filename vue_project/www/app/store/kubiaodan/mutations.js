export default {
    changenowEditing(state, { nowEditing }) {
        state.kubiaodan.nowEditing = nowEditing;
    },
    changeOptions(state, { v }) {
        state.kubiaodan.questions[state.kubiaodan.nowEditing].options = v;
    },
    changeTitle(state, { v }) {
        state.kubiaodan.questions[state.kubiaodan.nowEditing].title = v;
    },
    deloption(state, { n }) {
        state.kubiaodan.questions[state.kubiaodan.nowEditing].options.splice(n, 1);
    },
    addoption(state, { xoption }) {
        state.kubiaodan.questions[state.kubiaodan.nowEditing].options.push(xoption)
    },
    changeRequired(state, { v }) {
        state.kubiaodan.questions[state.kubiaodan.nowEditing].required = v;
    },
    changequestions(state, { v }) {
        state.kubiaodan.questions = v;
    },
    removequestion(state, { index }) {
        state.kubiaodan.questions.splice(index, 1);
    },
    insertQuestion(state, { newIndex, tixingObj }) {
        //注意，只有redux和dva要求纯函数，vuex和mobx都不是纯函数，可以直接改。
        state.kubiaodan.questions.splice(newIndex, 0, tixingObj);
    },
    changeLimitdate1(state, { v }) {
        state.kubiaodan.questions[state.kubiaodan.nowEditing].limitdate1 = v;
        state.kubiaodan.questions[state.kubiaodan.nowEditing].dateoptions = {
            disabledDate(date) {
                var exp1 = v == "" ? false : date.valueOf() < v;
                var exp2 = state.kubiaodan.questions[state.kubiaodan.nowEditing].limitdate2 == "" ? false : date.valueOf() > state.kubiaodan.questions[state.kubiaodan.nowEditing].limitdate2;
                return exp1 || exp2;
            }
        }
    },
    changeLimitdate2(state, { v }) {
        state.kubiaodan.questions[state.kubiaodan.nowEditing].limitdate2 = v;
        state.kubiaodan.questions[state.kubiaodan.nowEditing].dateoptions = {
            disabledDate(date) {
                var exp1 = state.kubiaodan.questions[state.kubiaodan.nowEditing].limitdate1 == "" ? false : date.valueOf() < state.kubiaodan.questions[state.kubiaodan.nowEditing].limitdate1;
                var exp2 = v == "" ? false : date.valueOf() > v;
                return exp1 || exp2;
            }
        }
    }
}