"use strict";
function getDay(req, res, next){
    const date = new Date()
    const y = date.getFullYear()
    const m = date.getMonth()+1
    const d = date.getDate()
    const start = "2021-7-15";
    const end = `${y}-${m}-${d}`;

    // 获取毫秒数
    const s = Date.parse(start);
    const ss = Date.parse(end)
    res.day = Math.floor( (ss-s)/(24*60*60*1000)) 
    next()
}

module.exports = getDay;