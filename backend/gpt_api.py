# /backend/gpt_api.py

import openai
from flask import current_app

def generate_recipe(prompt):
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",  # Replace with your preferred engine
            prompt=prompt,
            max_tokens=150
        )

        # Extract and return the generated text
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"Error in generating recipe: {e}")
        return None
