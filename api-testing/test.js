// This is your Editor pane. Write your JavaScript here and 
// use the command line to execute commands
var nba = require('nba-api-client');
var result = {
  table : []
};
var fs = require('fs');
nba.leaguePlayerGeneralStats({LeagueID: "00", Season: "2018-19", MeasureType: "Defense", "PerMode": "Totals"}).then(function(data){
  for (let i = 0; i < 530; i++) {
    var name = data["LeagueDashPlayerStats"][i.toString()]["PLAYER_NAME"];
    var ID = data["LeagueDashPlayerStats"][i.toString()]["PLAYER_ID"].toString();
    var def_rating = data["LeagueDashPlayerStats"][i.toString()]["DEF_RATING"];
    var dreb_pct = data["LeagueDashPlayerStats"][i.toString()]["DREB_PCT"];
    var pct_stl = data["LeagueDashPlayerStats"][i.toString()]["PCT_STL"];
    var pct_blk = data["LeagueDashPlayerStats"][i.toString()]["PCT_BLK"];
    var def_ws = data["LeagueDashPlayerStats"][i.toString()]["DEF_WS"];
    var def_rating_rank = 1 - (data["LeagueDashPlayerStats"][i.toString()]["DEF_RATING_RANK"] / 529);
    var dreb_pct_rank = 1 - (data["LeagueDashPlayerStats"][i.toString()]["DREB_PCT_RANK"] / 529);
    var pct_stl_rank = 1 - (data["LeagueDashPlayerStats"][i.toString()]["PCT_STL_RANK"] / 529);
    var pct_blk_rank = 1 - (data["LeagueDashPlayerStats"][i.toString()]["PCT_BLK_RANK"] / 529);
    var def_ws_rank = 1 - (data["LeagueDashPlayerStats"][i.toString()]["DEF_WS_RANK"] / 529);
    var json = {
    };
    json[ID] = {
        "PLAYER_NAME": name,
        "DEF_RATING": def_rating,
        "DREB_PCT": dreb_pct,
        "PCT_STL": pct_stl,
        "PCT_BLK": pct_blk,
        "DEF_WS": def_ws,
        "DEF_RATING_RANK": def_rating_rank,
        "DREB_PCT_RANK": dreb_pct_rank,
        "PCT_STL_RANK": pct_stl_rank,
        "PCT_BLK_RANK": pct_blk_rank,
        "DEF_WS_RANK": def_ws_rank,
      }
    result.table.push(json);
  };
  result = JSON.stringify(result);
  fs.writeFile('advance_off_totals.json', result, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});
