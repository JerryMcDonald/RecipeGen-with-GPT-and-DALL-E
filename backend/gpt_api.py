import os
import json
import openai
from flask import current_app
from recipe_schema import schema

from dotenv import load_dotenv
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_recipe(prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-0613",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f"Provide a recipe for {prompt}"},
            ],
            functions=[{"name": "set_recipe", "parameters": schema}],
            function_call={"name": "set_recipe"},
            temperature=0,
        )

        # Extract and parse the generated recipe
        generated_recipe_string = response.choices[0].message.function_call.arguments
        generated_recipe = json.loads(generated_recipe_string)

        # Return the parsed recipe
        return generated_recipe
    except Exception as e:
        print(f"Error in generating recipe: {e}")
        return None
