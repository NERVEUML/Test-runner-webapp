from flask import Flask, render_template
import rospy
from roslibpy import Ros, Topic

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


ros = Ros('localhost', 9090)
ros.run()

topic = Topic(ros, '/topic_name', 'message_type')

topic.subscribe(callback)


def callback(message):
    print(message)


if __name__ == '__main__':
    app.run()
