class Card:
    def __init__(self, front, back): # __init__() function is called automatically every tie the class is being used to create a new object
        self.front = front
        self.back = back

# creating lists
import glob
cards = []
fronts = glob.glob('gifs/*.gif')
back = 'pathtoback.png'

def card_generator(cards, fronts, back):
    for x in range(len(fronts)):
        cards.append(Card(fronts[x], back))
        print(cards[x].front)

    
card_generator(cards, fronts, back)
