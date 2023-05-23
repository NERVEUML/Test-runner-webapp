#!/usr/bin/env python

from roslibpy import Ros, Topic
import time
import random


ros = Ros('localhost', 9090)
ros.run()

topic = Topic(ros, '/unique_topic', 'std_msgs/String')

while True:
    message = {'data': 'Unique information ' + str(random.randint(0, 100))}
    topic.publish(message)
    time.sleep(1)

ros.close()
