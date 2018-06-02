#!/usr/bin/env bash

port=2020
dburi=./notes.db
pid_file=todo-server.pid

jar=todo-server-0.0.1-SNAPSHOT.jar

function start() {
	running=`lsof -i :$port | grep $port`
	if [[ $running ]]; then 
		echo "Port $port is already bound."
		exit 1;
	fi

	nohup java -jar "$jar" \
		--server.port=$port \
		--todo-server.dburi="${dburi}" 1>> todo-server.log 2>> todo-error.log &
	echo "$!" > "$pid_file"
}

function stop() {
	[ ! -f "$pid_file" ] && return
	kill -TERM `cat "$pid_file"`;
	rm "$pid_file"
}

case "$1" in
	"start")
		echo "Starting todo-server"
		start
		;;

	"stop")
		echo "Stopping todo-server"
		stop
		;;

	"restart")
		echo "Stopping todo-server"
		stop
		sleep 10
		start
		;;

	"*")
		echo "$1 not supported"
esac

