var userIdsToNames = {
  "11003986": "Arun",
  "5467197": "Sridhar",
  "11003788": "Asif",
  "1167438": "Jatin",
  "11003905": "Harsh",
  "11004621": "Abhishek",
  "11010582": "Ravindra",
}

var tables = document.getElementsByClassName("rankingtable");
if (tables.length == 1) {
  var rankingTable = tables[0];
  for (var i = rankingTable.rows.length - 1; i >= 1; i--) {
    var row = rankingTable.rows[i];
    var cell = row.cells[0];

    var aTag = cell.getElementsByTagName("a")[1]
    // https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=11003986&GameID=509157
    var url = new URL(aTag.href);
    var userId = url.searchParams.get("UserID");
    var userName = userIdsToNames[userId];

    aTag.text = userName + " " + aTag.text;
  }
}
