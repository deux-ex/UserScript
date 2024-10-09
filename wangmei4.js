var timeStart = 3 * 1000;
var timeEnd = 5 * 1000;
var count = 0;
var maxRuns = 1;

var intervalId = window.setInterval(function () {
  showalert();
  count++;

  if (count >= maxRuns) {
    clearInterval(intervalId);
  }
}, getRandomArbitrary(timeStart, timeEnd));

function showalert() {
  var kkk = document.getElementsByClassName("adnow");
  formattedData = kkk[0].outerText;
  var formattedData = parseText(formattedData);
  console.log(formattedData);
  // const notification = new Notification(formattedData);
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function parseText(text) {
  var lines = text.split("\n");
  var formattedContent = [];

  for (var i = 0; i < lines.length; i += 3) {
    var item = {
      category: lines[i].trim(),
      detail: lines[i + 1].trim(),
      date: lines[i + 2].trim(),
    };

    // 检查是否已存在相同的条目
    var isDuplicate = formattedContent.some(function (existingItem) {
      return (
        existingItem.category === item.category &&
        existingItem.detail === item.detail &&
        existingItem.date === item.date
      );
    });

    // 如果不是重复项，则添加到最终的数据中
    if (!isDuplicate) {
      formattedContent.push(item);
    }
  }

  // 按日期从最新到最旧排序
  formattedContent.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  return formattedContent;
}
