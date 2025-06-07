# React Gym Vite App

This repository contains the source code for a gym-focused web application built using React and Vite.

## Access the Live Sites

You can view the live versions of this application at the following URLs:

- **GitHub Pages:** [https://khairiyusoff.github.io/React-Gym-Vite/](https://khairiyusoff.github.io/React-Gym-Vite/)
- **Vercel:** [https://react-gym-vite.vercel.app](https://react-gym-vite.vercel.app)
- **Google Cloud Run:** [https://react-gym-vite-771764609819.us-central1.run.app](https://react-gym-vite-771764609819.us-central1.run.app)

## About This Project

[You can add a brief description of your gym app here. What features does it have? What is its purpose?]

For example:

> This application provides users with information about our gym, including class schedules, membership details, contact information, and perhaps a gallery of our facilities.

## Technologies Used

- React
- Vite
- [Mention any other significant libraries or frameworks you used, e.g., Tailwind CSS, Material UI, etc.]

## Getting Started (For Developers)

If you want to run this project locally or contribute to its development, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/khairiyusoff/React-Gym-Vite.git](https://github.com/khairiyusoff/React-Gym-Vite.git)
    cd React-Gym-Vite
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will usually start the application at `http://localhost:5173` (or a similar port).

### Running with Docker (For Developers)

If you prefer to run the application using Docker, follow these steps:

1.  **Ensure Docker Desktop is running.**
2.  **Build the Docker image:**
    ```bash
    docker build -t react-gym-vite-local .
    ```
3.  **Run the Docker container using docker-compose:**
    ```bash
    docker-compose up
    ```
    This will start the application, typically accessible at `http://localhost:80` in your browser.

## Build for Production

To build the application for production deployment:

```bash
npm run build
# or
yarn build
```
