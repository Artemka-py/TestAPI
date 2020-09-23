from flask import Flask, Response, json

app = Flask(__name__)

@app.route('/api/<text>', methods=['POST'])
def index(text):
	json_string = json.dumps(text)
	json_string = json.loads(json_string)
	json_string = json.dumps(text)
	json_string = json.loads(json_string)
	json_string = json.dumps(text)
	return Response(json_string, mimetype="aplication/json; charset=utf-8")

if __name__ == '__main__':
	app.run(debug=True)