var $send = $('#sendButton');

$('#chat-window ul').children().last().hide();

function refreshChat(e){
	e.preventDefault();
	sendData();
	$('#dataChannelSend').val('');
}

$send.on('click', refreshChat);