$('#webrtc-ready').hide();
$('#chat-window ul').children().last().hide();

var $send 	= $('#sendButton'),
	$login	= $('#loginButton');

function refreshChat(e){
	e.preventDefault();
	if ($('#dataChannelSend').val() != ""){
		sendData();
		$('#dataChannelSend').val('');
	}
}

$send.on('click', refreshChat);

function getChannelInfo(e){
	e.preventDefault();
	room = $('#roomName').val();
	self_nick = $('#nickName').val();

	$('#channel-info').slideUp();
	$('#webrtc-ready').slideDown();
	$('#channel-info').remove();

	window.setTimeout(function(){
		startSignaling(room);
		var $info_item = $('#chat-window ul').children().last().clone();
		$info_item.find('p').text('You have connected to room ' + room);
		$info_item.find('p').removeClass('message');
		$info_item.find('p').addClass('info');
		$('#chat-window ul').prepend($info_item);
		$info_item.slideDown();
	}, 500);
}

$login.on('click', getChannelInfo);