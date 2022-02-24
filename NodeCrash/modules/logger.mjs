var url = "https://some.end.point/logs";

function log(message){
	// send an http request and log the logs with message
	var logs = Math.floor(Math.random() * 100) + 1;
	return (message + " " + logs);
}

export default log;