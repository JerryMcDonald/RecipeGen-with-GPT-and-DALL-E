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

2. Create a `.env` file in the `backend` directory with the following content:
    (or rename `.env.sample` and delete the `.sample`)

    ```
    OPENAI_API_KEY=your_openai_api_key
    ```

   Replace `your_openai_api_key` with your actual OpenAI key. This should be kept secret and not be committed to your repository.

3. Navigate to the backend directory:

    ```
    cd recipegen/backend
    ```

4. Create a Python virtual environment:

    ```
    python -m venv venv
    ```

5. Activate the virtual environment:

    - On macOS, Linux, Node:
        ```
        source venv/Scripts/activate
        ```

    - On Windows:
        ```
        source .\\venv\\Scripts\\activate
        ```

6. Install the Python dependencies from `requirements.txt`:

    ```
    pip install -r requirements.txt
    ```


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