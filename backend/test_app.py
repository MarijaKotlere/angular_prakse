import unittest
import json
from flask import Flask, jsonify, send_from_directory, request, redirect, url_for
from app import app, init_db, get_db_connection

class FlaskTestCase(unittest.TestCase):
    def setUp(self):
        # Create a test client
        self.app = app.test_client()
        self.app.testing = True
        
        # Set up the database
        init_db()

    def tearDown(self):
        # Teardown code to clean up after tests
        conn = get_db_connection()
        conn.execute('DELETE FROM comments')
        conn.commit()
        conn.close()

    def test_index(self):
        
        response = self.app.get('/api/comments')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content_type, 'application/json')

    def test_add_comment(self):
        comment_data = {'name': 'John Doe', 'message': 'This is a test comment'}
        response = self.app.post('/api/comment', json=comment_data)
        self.assertEqual(response.status_code, 302)  # Redirect to index
        
        response = self.app.get('/api/comments')
        self.assertEqual(response.status_code, 200)
        comments = json.loads(response.data)
        self.assertEqual(len(comments), 1)
        self.assertEqual(comments[0]['name'], 'John Doe')
        self.assertEqual(comments[0]['message'], 'This is a test comment')

    def test_delete_comment(self):
        # Add a comment first
        comment_data = {'name': 'John Doe', 'message': 'This is a test comment'}
        self.app.post('/api/comment', json=comment_data)

        # Get the comment ID
        response = self.app.get('/api/comments')
        comments = json.loads(response.data)
        comment_id = comments[0]['id']
        
        # Delete the comment
        response = self.app.post(f'/api/comment/{comment_id}/delete')
        self.assertEqual(response.status_code, 302)  # Redirect to index

        # Verify the comment is deleted
        response = self.app.get('/api/comments')
        comments = json.loads(response.data)
        self.assertEqual(len(comments), 0)

    def test_edit_comment(self):
        # Add a comment first
        comment_data = {'name': 'John Doe', 'message': 'This is a test comment'}
        self.app.post('/api/comment', json=comment_data)

        # Get the comment ID
        response = self.app.get('/api/comments')
        comments = json.loads(response.data)
        comment_id = comments[0]['id']
        
        # Edit the comment
        updated_comment_data = {'name': 'Jane Doe', 'message': 'This is an updated test comment'}
        response = self.app.post(f'/api/comment/{comment_id}', json=updated_comment_data)
        self.assertEqual(response.status_code, 302)  # Redirect to index

        # Verify the comment is updated
        response = self.app.get('/api/comments')
        comments = json.loads(response.data)
        self.assertEqual(comments[0]['name'], 'Jane Doe')
        self.assertEqual(comments[0]['message'], 'This is an updated test comment')



if __name__ == '__main__':
    unittest.main()