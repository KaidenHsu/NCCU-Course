const mqtt = require('mqtt');
const client = mqtt.connect();
client.subscribe('   '); //請填入適當的值
let eventSeq = ['CO', 'CF', 'DO', 'DF'];

client.on('message', function (topic, message) {
    let item = eventSeq[0]; // 取得eventSeq的第一個元素
    // 除錯用
    // message是Buffer型別，要用message.toString()才能取得字串值
    console.log('input: ' + message.toString());
    console.log('expected: ' + item);

    //if (…) …; // 如果message和item匹配，將匹配元素從陣列移出 (使用eventSeq.shift())
                // message是Buffer型別，要用message.toString()才能取得字串值
    //if (…) { // 如果全部匹配
          // 送出LEAVE到EVENT topic並回復eventSeq的內容
    //    client.publish('      ', '      '); //請填入適當的值
    //    eventSeq = ['CO', 'CF', 'DO', 'DF'];// 重置
    //}
});

