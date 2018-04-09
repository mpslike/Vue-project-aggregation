export default {
    changequestion_dragstop({ commit, state }, { newIndex, oldIndex }) {
        if (state.kubiaodan.nowEditing == oldIndex) {
            commit("changenowEditing", { nowEditing: newIndex });
        } else if (oldIndex > state.kubiaodan.nowEditing && newIndex <= state.kubiaodan.nowEditing){
            commit("changenowEditing", { nowEditing: state.kubiaodan.nowEditing + 1});
        } else if (oldIndex < state.kubiaodan.nowEditing && newIndex >= state.kubiaodan.nowEditing) {
            commit("changenowEditing", { nowEditing: state.kubiaodan.nowEditing - 1 });
        }
    },
    insertQuestion({ commit, state }, { newIndex, tixingObj }) {
        //注意，只有redux和dva要求纯函数，vuex和mobx都不是纯函数，可以直接改。
        commit("insertQuestion", { newIndex, tixingObj })
        commit("changenowEditing", { nowEditing: newIndex })
    }
}