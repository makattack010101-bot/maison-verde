from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    
    # Simuler une réponse d'IA
    # Vous pouvez intégrer OpenAI ici :
    # response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": user_message}])
    # bot_message = response.choices[0].message.content
    
    bot_message = f"En tant qu'assistant IA, j'ai reçu votre message : '{user_message}'. Comment puis-je vous aider davantage ?"
    
    return jsonify({"response": bot_message})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
