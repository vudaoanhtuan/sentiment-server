import os
from requests import post
from flask import Flask, jsonify, request, json, render_template


app = Flask(__name__, static_folder='static', template_folder='template')
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def sentiment():
    sent = request.form['input']
    data = {
        "documents": [
            {
                "id": "1",
                "content": sent
            }      
        ]
    }
    res = post('http://34.87.77.73:5000/api/v2/sentiment', json=data).json()
    res = res["results"][0]
    score = res['confidentScore']
    score = "%.4f" % score
    sentiment = res['score']
    if sentiment==0:
        sentiment='Neutral'
    elif sentiment==1:
        sentiment="Positive"
    else:
        sentiment="Negative"
    return render_template('index.html', score=score, sentiment=sentiment)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    host = 'localhost'
    app.run(host=host, port=port)