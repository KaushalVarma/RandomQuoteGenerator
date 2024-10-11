from flask import Flask, jsonify
import random
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load quotes from JSON file
with open('quotes.json') as f:
    data = json.load(f)
    quotes = data['quotes']

@app.route('/api/quote', methods=['GET'])
def get_random_quote():
    quote = random.choice(quotes)
    return jsonify({"quote": quote})

if __name__ == '__main__':
    app.run(debug=True)
