import flask

app = Flask(__name__)

@app.route('/')

def home():

    return 'Ciao da Flask'



@app.route('/api/status')
def status():
    return{'status':'OK','message':'API funzionante'}



if __name__ == '__main__':

    app.run(debug=True)