$(function() {
	nodecg.listenFor('showScoreboard', showScoreboard);
	nodecg.listenFor('hideScoreboard', hideScoreboard);
	nodecg.listenFor('updateScore', updateScore);
	//nodecg.listenFor('updateSet', updateSet);
	nodecg.listenFor('updateTeams', teams);

	var scoresVisible = false;


function showScoreboard() {
	var show = new TweenLite({paused: true});
	show.to($('#scoreboard'), 1, {scale:1.0, opacity:1.0})
	.play;
	scoresVisible = true;
}

function hideScoreboard() {
	var hide = new TweenLite({paused: true});
	hide.to($('#scoreboard'), 1, {scale:0.0, opacity:0.0})
	.play;
	scoresVisible = false;
}

function updateScore(data) {
	$('#away-team-score-font').text(data.awayScore);
	$('#home-team-score-font').text(data.homeScore);
}

function teams(data) {

    //DEBUG
    //console.log(data);
    //alert("updating");
    $('#away-team-score-font').text(data.awayScore);
    $('#away-team-font').text(data.awayName);
    $('#home-team-score-font').text(data.homeScore);
    $('#home-team-font').text(data.homeName);
}

});




