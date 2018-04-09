<template>
    <div>
        <div class="unit">
            <div class="canlendar_table_box">
                <table>
                    <tr v-for="i in 6">
                        <td v-for="j in 7">1</td>
                    </tr>
                </table>
            </div>
            <div class="schedule_table_box">
                <table class="schedule_table">
                    <tr>
                        <td>
                            <table class="bar_table">
                                <tr>
                                    <td colspan="1"></td>
                                    <td colspan="1"></td>
                                    <td colspan="1"></td>
                                    <td colspan="3">
                                        <div class="thing s1">早起读英语</div>
                                    </td>
                                    <td colspan="1"></td>
                                </tr>
                                <tr>
                                    <td colspan="1"></td>
                                    <td colspan="1"></td>
                                    <td colspan="1"></td>
                                    <td colspan="1">
                                        <div class="thing s1">和小张相亲</div>
                                    </td>
                                    <td colspan="1"></td>
                                    <td colspan="2">
                                        <div class="thing s2">出国玩儿</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table class="bar_table">
                                <tr>
                                    <td colspan="7">
                                        <div class="thing s2">出国玩儿</div>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table class="bar_table">
                                <tr>
                                    <td colspan="4">
                                        <div class="thing s2">出国玩儿</div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table class="bar_table">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table class="bar_table">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table class="bar_table">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .unit{
        position:relative;
        height:540px;
        margin-top:10px;

        .canlendar_table_box{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:540px;

            table,tr,td{
                border-collapse:collapse;
            }
            table{
                width:100%;
            }
            td{
                width:100% / 7;
               
                border:1px solid #eee;
                height:90px;
                vertical-align:top;
            }
        }
        .schedule_table_box{
            position:absolute;
            top:0;
            left:0;
             width:100%;
            height:540px;

            table,tr,td{
                border-collapse:collapse;
            }
            .schedule_table{
                width:100%;
            }
            .schedule_table>tr>td{
                // border:1px solid blue;
                height:90px;
                padding-top:24px;

                .bar_table{
                    width:100%;
                    tr{
                        td{
                             width:100% / 7;
                            height:20px;
                            //  border:1px solid green;
                            padding:2px;

                            .thing{
                                font-size:12px;
                                line-height:18px;
                                height:18px;
                            }

                            .s1{
                                background:#f969aa;
                            }
                            .s2{
                                background : #7fddf2
                            }
                        }
                    }
                }
            }
        }
    }
   
</style>