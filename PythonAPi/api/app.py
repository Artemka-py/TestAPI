from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/<text>', methods=['POST'])
def index(text):
  return jsonify({"text": text})