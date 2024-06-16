from flask import Flask, jsonify, send_from_directory, request, redirect, url_for
from db import init_db, get_db_connection
import json

app = Flask(__name__)


@app.route('/api/comments')
def index():
    conn = get_db_connection()
    cursor = conn.cursor()
    comments = cursor.execute('SELECT name, message, id FROM comments').fetchall()
    conn.close()
    comment_json = []
    for comment in comments:
      comment_json.append({
        'id': comment['id'],
        'name': comment['name'],
        'message': comment['message']
      })
    return jsonify(comment_json)

@app.route('/api/comment', methods=['POST'])
def add_comment():
    print(request.json)
    name = request.json['name']
    message = request.json['message']
    conn = get_db_connection()
    conn.execute('INSERT INTO comments (name, message) VALUES (?, ?)', (name, message))
    conn.commit()
    conn.close()
    return redirect(url_for('index'))

@app.route('/api/comment/<int:comment_id>/delete', methods=['POST'])
def delete_comment(comment_id):
    conn = get_db_connection()
    conn.execute('DELETE FROM comments WHERE id = ?', (comment_id,))
    conn.commit()
    conn.close()
    return comment_id
    # return redirect(url_for('index'))

@app.route('/api/comment/<int:comment_id>', methods=['GET', 'POST'])
def edit_comment(comment_id):
    conn = get_db_connection()
    comment = conn.execute('SELECT * FROM comments WHERE id = ?', (comment_id,)).fetchone()
    if request.method == 'POST':
        name = request.json['name']
        message = request.json['message']
        conn.execute('UPDATE comments SET name = ?, message = ? WHERE id = ?', (name, message, comment_id))
        conn.commit()
        conn.close()
        return redirect(url_for('index'))
    conn.close()
    return render_template('edit.html', comment=comment)


@app.route('/')
@app.route('/about')
@app.route('/gallery')
@app.route('/contact')
@app.route('/services')
def start_angular():
  return send_from_directory('../dist/photographer-portfolio/server','index.server.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>', methods=['GET'])
def angular_proxy(path):
  return send_from_directory('../dist/photographer-portfolio/browser', path)



if __name__ == '__main__':
  init_db()
  app.run(debug=True)
  conn = get_db_connection()



  