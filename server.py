from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
  # Serve the front-end HTML file
  return app.send_static_file('index.html')

@app.route('/submit-message', methods=['POST'])
def submit_message():
  # Retrieve data from request body
  data = request.get_json()
  name = data.get('name')
  email = data.get('email')
  message = data.get('message')

  # Implement server-side validation and data sanitization (not shown here)
  # ...

  # Connect to database and store data securely (not shown here)
  # ...

  return jsonify({'success': True, 'message': 'Message received!'})

if __name__ == '__main__':
  app.run(debug=True)
