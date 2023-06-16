# /backend/routes/gpt_routes.py

from flask import Blueprint, request, jsonify
from gpt_api import generate_recipe

bp = Blueprint('gpt', __name__, url_prefix='/api/gpt')

@bp.route('/generate-recipe', methods=['POST'])
def post_recipe():
    data = request.get_json()
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400

    recipe = generate_recipe(prompt)
    if not recipe:
        return jsonify({'error': 'Could not generate recipe'}), 500

    return jsonify({'recipe': recipe})
