#!flask/bin/python
from flask import Flask, jsonify
from flask import abort
from flask import make_response
from flask import request
from naoqi import ALProxy
tts = ALProxy("ALTextToSpeech", 'cookie.local', 9559)

app = Flask(__name__)


@app.route('/say', methods=['POST'])
def create_task():

    try:
        request.json['say']
    except:
        abort(404)

    print request.json
    tts.say(str(request.json['say']))

    return jsonify({'resp': request.json['say']}), 201


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


if __name__ == '__main__':
    app.run(debug=True)
