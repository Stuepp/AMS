class Card:
    def __init__(self, front, back): # __init__() function is called automatically every tie the class is being used to create a new object
        self.front = front
        self.back = back

# creating lists
cards = []
fronts = []
backs = []

def card_generator(cards, fronts, backs):
    for x in range fronts:
        cards.append(Card(fronts[x],backs[x]))