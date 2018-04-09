export default {
    "nowEditing": 0,
    "questions": [
        {
            "title": "你平时最喜欢的休闲活动是？",
            "type": "singleoption",
            "options": ["看电视", "看电影", "打游戏", "运动"],
            "required": true
        },
        {
            "title": "你的大学毕业日期",
            "type": "datepick",
            "required": true,
            "limitdate1": null,
            "limitdate2": null,
            "dateoptions": {
                disabledDate(date) {
                    return false;
                }
            }
        },
        {
            "title": "你喜欢看的电视剧类型？",
            "type": "multipleoption",
            "options": ["古装剧", "现代剧", "言情剧", "武侠剧", "美剧", "韩剧"],
            "required": true
        },
        {
            "title": " 你最喜欢看的综艺节目类型？",
            "type": "selectoption",
            "options": ["音乐类型", "娱乐类型", "文化类型"],
            "required": false
        },
        {
            "title": " 你最喜欢看的电影类型",
            "type": "selectoption",
            "options": ["音乐类型", "娱乐类型", "文化类型"],
            "required": false
        }
    ]
}