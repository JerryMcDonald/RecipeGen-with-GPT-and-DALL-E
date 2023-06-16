# /backend/dalle_api.py

import openai
from flask import current_app

def generate_image(prompt):
    try:
        response = openai.ImageCompletion.create(
            model="davinci-codex",  # Replace with your preferred model
            prompt=prompt,
            max_responses=1
        )

        # Extract and return the image
        return response.choices[0].image
    except Exception as e:
        print(f"Error in generating image: {e}")
        return None
