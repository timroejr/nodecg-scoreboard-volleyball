'use strict';

$('#teams').click(function() {
	var data = {};
	data.awayName = $('#scoreboard-away-name').val();
	data.awayScore = $('#scoreboard-away-score').val();
	data.homeName = $('#scoreboard-home-name').val();
	data.homeScore = $('#scoreboard-home-score').val();
	console.log(data);
	nodecg.sendMessage('updateTeams', data);
});

$('#scoreboard-update-scores').click(function() {
	var data = {}
	data.awayScore = $('#scoreboard-away-score').val();
	data.homeScore = $('#scoreboard-home-score').val();
	nodecg.sendMessage('updateScore', data);
});

$('#scoreboard-show').click(function() {
	nodecg.sendMessage('showScoreboard');
});

$('#scoreboard-hide').click(function() {
	nodecg.sendMessage('hideScoreboard');
});
