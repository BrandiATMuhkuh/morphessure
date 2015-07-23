#!/bin/bash
# user "apt-get install vorbis-tools" to run this script in ubuntu
pwd

echo $0
echo $1
echo $2

#!/bin/sh
if [[ -z "$1" ]]; then
   echo "no Condition id given"
   exit
fi

CONDITION=$1

if [[ -z "$2" ]]; then
   echo "no participant id given"
   exit
fi

PARTICIPANTID=$2



file_name="audioRecordings/recording_"$CONDITION"_"$PARTICIPANTID".ogg"
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
