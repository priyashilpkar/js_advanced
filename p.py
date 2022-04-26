import tkinter as TK
from turtle import *
bgcolor("black")
speed(0)
hideturtle()
for i in range(129):
    color("red")
    circle(i)
    color("orange")
    circle(i*0.8)
    right(3)
    forward(3)
done()










# turtle.bgcolor("black")
# turtle.pensize(3)
# turtle.speed(0)
# for i in range(25):
#     for colours in ["red","orange","blue","purple","pink","magenta","white","yellow","green"]:
#         turtle.color(colours)
#         turtle.circle(100)
#         turtle.left(10)
# turtle.hideturtle()