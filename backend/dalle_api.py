import os
import openai
from flask import current_app
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")


def generate_image(prompt):
    try:
        response = openai.Image.create(
        prompt=prompt,
        n=1,
        size="1024x1024"
        )
        image_url = response['data'][0]['url']

        # Extract and return the image
        return image_url
    except Exception as e:
        print(f"Error in generating image: {e}")
        return None
