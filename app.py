from os import path
from pathlib import Path

from flask import Flask, render_template

template_folder = path.abspath('./wiki')

app = Flask(__name__, template_folder=template_folder)

@app.route('/')
def home():
    return render_template('pages/home.html')

@app.route('/<page>/')
def pages(page):
    print(page.lower())
    return render_template('pages/' + page.lower() + '.html')

# Main Function, Runs at http://0.0.0.0:8080
if __name__ == "__main__":
    app.run(port=8080, debug=True)
