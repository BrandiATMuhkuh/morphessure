#!/bin/bash
# user "apt-get install vorbis-tools" to run this script in ubuntu
pwd

read -e -p "Enter condition number: " -i "" CONDITION
read -e -p "Enter participant id: " -i "" PARTICIPANTID

if [[ -z "$CONDITION" ]]; then
   echo "you did not name the CONDITION"
   exit
fi

if [[ -z "$PARTICIPANTID" ]]; then
   echo "you did not name the PARTICIPANTID"
   exit
fi

file_name="recording_"$PARTICIPANTID"_"$CONDITION".ogg"
echo $file_name

echo
echo "Recording audio to OGG file $file_name"
echo "Press Ctrl+C to end recording"
echo
cleanup() {
	echo -e "Done\n"
}
trap cleanup INT
(
	trap "" INT
	exec rec -t raw -c 2 -r 44100 - | \
		oggenc -r -B 16 -C 2 -R 44100 -q 5 -o "$file_name" - ;
)
