from flask import Flask, render_template, jsonify
import random
from datetime import datetime

app = Flask(__name__)

# Funny love messages that will appear randomly
love_messages = [
    "Bmooooooooooooooooot b tezekkkkkkkk l kberee! 💕",
    "Ente a7la she b7ayete! ❤️",
    "nyele 3layke ya a8la ma5lo2a! 📱💘",
    "3azez meshta2lek ktiiiiiiiiir! 🥒😍",
    "bade nem ma3ek 3atoull! 🛏️💗",
    "You're my favorite notification! 🔔❤️",
    "Yeslamleee l zahrr! 🍑💕",
    "ente azka w askas we7de bdenytee kolla! 😊📱"
]

# Reasons why you love her
reasons = [
    "Your smile lights up my whole world",
    "You make the worst days feel amazing",
    "Your laugh is my favorite sound",
    "You understand my weird sense of humor",
    "You're beautiful inside and out",
    "You're my best friend and partner",
    "You make every moment an adventure",
    "Your kindness inspires me every day",
    "You accept all my quirks and weirdness",
    "You make me want to be a better person"
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/random-message')
def random_message():
    return jsonify({'message': random.choice(love_messages)})

@app.route('/api/reasons')
def get_reasons():
    return jsonify({'reasons': reasons})

@app.route('/api/love-percentage')
def love_percentage():
    # Always 100% because it's your wife!
    return jsonify({'percentage': 100, 'message': 'Maximum love achieved! 💯❤️'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
