# RecipeGen Backend

This directory contains the backend for the RecipeGen app, which generates recipes and associated images using the OpenAI GPT-3 and DALL-E APIs.

## Getting Started

These instructions will get the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Python 3.6 or higher and pip installed on your system.

### Installing

1. Clone the repository:

    ```
    git clone https://github.com/yourusername/recipegen.git
    ```

2. Navigate to the backend directory:

    ```
    cd recipegen/backend
    ```

3. Create a Python virtual environment:

    ```
    python -m venv venv
    ```

4. Activate the virtual environment:

    - On macOS, Linux, Node:
        ```
        source venv/Scripts/activate
        ```

    - On Windows:
        ```
        .\\venv\\Scripts\\activate
        ```

5. Install the Python dependencies from `requirements.txt`:

    ```
    pip install -r requirements.txt
    ```

6. Create a `.env` file in the `backend` directory with the following content:

    ```
    SECRET_KEY=your_secret_key
    OPENAI_API_KEY=your_openai_api_key
    DALLE_API_KEY=your_dalle_api_key
    ```

   Replace `your_secret_key`, `your_openai_api_key`, and `your_dalle_api_key` with your actual secret key for Flask and your actual OpenAI and DALL-E API keys. These should be kept secret and not be committed to your repository.

7. Run the application:

    ```
    python app.py
    ```

   The application should now be running at [http://localhost:5000](http://localhost:5000).

## Project Structure

- **`app.py`**: The main application file where the Flask application is initialized and configured.
- **`gpt_api.py`**: This file contains the function to interact with the GPT-3 API.
- **`dalle_api.py`**: This file contains the function to interact with the DALL-E API.
- **`/routes`**: This directory contains the route definitions for different parts of the application.
    - **`gpt_routes.py`**: The Flask routes related to the GPT functionality.
    - **`dalle_routes.py`**: The Flask routes related to the DALL-E functionality.
