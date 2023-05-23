# Import the Flask and render_template classes from the flask module
from flask import Flask, render_template

# Create an instance of the Flask class
app = Flask(__name__)

# Define a route for the home page


@app.route('/')
def home():
    return render_template('index.html')


# Start the development server using the run() method
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
