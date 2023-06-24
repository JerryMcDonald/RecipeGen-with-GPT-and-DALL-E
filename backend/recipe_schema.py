# Schema Credit: https://yonom.substack.com/p/native-json-output-from-gpt-4
# Thanks Simon

schema = {
    "type": "object",
    "properties": {
        "ingredients": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {"type": "string"},
                    "unit": {
                        "type": "string",
                        "enum": ["grams", "ml", "cups", "pieces", "teaspoons"],
                    },
                    "amount": {"type": "number"},
                },
                "required": ["name", "unit", "amount"],
            },
        },
        "instructions": {
            "type": "array",
            "description": "Steps to prepare the recipe (no numbering)",
            "items": {"type": "string"},
        },
        "time_to_cook": {
            "type": "number",
            "description": "Total time to prepare the recipe in minutes",
        },
        "visual_discription_of_image": {
            "type": "string",
            "description": "A prompt to Dalle to get the most accurate depiction of this item, please base it off of the ingredients and instructions, Get very detailed up to 300 characters",
        },
    },
    "required": ["ingredients", "instructions", "time_to_cook"],
}

# Here is an example of improvement in prompt engineering, I was trying to have ChatGPT rate the silliness of the recipe name so I could conditionally
# build a prompt, then I realized that I could just have ChatGPT build the prompt for me!
# "serious_to_silly_rating": {
#     "type": "number",
#     "description": "On a scale of 1 to 10, 1 being a legitimate and a serious recipe name, and 10 being really silly and definitely not food, what would you rate this recipe?",
# },
