#!/usr/bin/env python

import rospy
from std_msgs.msg import String
import time
import random


rospy.init_node('unique_topic_publisher')
pub = rospy.Publisher('unique_topic', String, queue_size=10)


while not rospy.is_shutdown():
    message = 'Unique information ' + str(random.randint(0, 100))
    rospy.loginfo(message)
    pub.publish(message)
    time.sleep(1)


rospy.spin()
