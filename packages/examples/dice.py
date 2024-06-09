#--web true
#--kind python:default
import random

def main(args):
    return {
        "body": str(random.randint(1,6))
    }
    