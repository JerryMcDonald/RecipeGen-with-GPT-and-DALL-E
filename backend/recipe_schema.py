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
                    "name": { "type": "string" },
                    "unit": { 
                        "type": "string",
                        "enum": ["grams", "ml", "cups", "pieces", "teaspoons"]
                    },
                    "amount": { "type": "number" }
                },
                "required": ["name", "unit", "amount"]
            }
        },
        "instructions": {
            "type": "array",
            "description": "Steps to prepare the recipe (no numbering)",
            "items": { "type": "string" }
        },
        "time_to_cook": {
            "type": "number",
            "description": "Total time to prepare the recipe in minutes"
        }
    },
    "required": ["ingredients", "instructions", "time_to_cook"]
}
