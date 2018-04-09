<template>
    <div>
        <h1>吴新华的Vue练习</h1>

        <div>
            <p>面试官您好，我在工作中自学Vue，下面是我的Vue练习作品：</p>
            <ul>
                <li>
                     <router-link to="/kubiaodan">酷表单习作</router-link>
                     <small>使用了vue-draggble插件，练习v-model的get()和set()与vuex中的值双向绑定</small>
                </li>
                <li>
                    <router-link to="/filtercar">汽车筛选器</router-link>
                    <small>使用了iview的表格、分页条，实现了和后端交互的分页、筛选、排序</small>
                </li>
                <li><router-link to="/schedule">日程表习作</router-link></li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
    p{
        font-size:18px;
        margin:20px 0;
    }
    ul{
        list-style:none;
        li{
            font-size:22px;
            line-height:40px;
            small{
                font-size:16px;
            }
        }
    }
</style>