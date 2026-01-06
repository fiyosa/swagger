# Swagger Minimal Setup

A lightweight, standalone distribution of **Swagger UI** for hosting and testing API documentation locally or on a static web server. This setup is pre-configured to be minimal and easy to integrate into any project.

## 🚀 Overview

This project provides a clean structure for documenting your APIs using the OpenAPI Specification (OAS). It uses the static distribution of Swagger UI, meaning you don't need to install any heavy dependencies or run a complex backend just to view your documentation.

## 🛠️ Getting Started

### 1. View Documentation
To view the Swagger UI, simply open the `index.html` file in your preferred web browser. 

> **Tip:** For the best experience (including full support for external references and certain browser features), it is recommended to use a local development server such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code or `npx serve`.

### 2. Customize API Definition
The API content is driven by the `swagger.yaml` file located in the root directory. You can edit this file to define your own endpoints, schemas, and security requirements.

### 3. Link Your Specification
Currently, the Swagger UI is configured in `swagger-initializer.js`. To point it to your local `swagger.yaml`, ensure the `url` property is set correctly:

```javascript
window.ui = SwaggerUIBundle({
  url: "./swagger.yaml", // Path to your local specification
  dom_id: '#swagger-ui',
  // ... rest of configuration
});
```

## ✨ Key Features

- **Standalone & Lightweight:** No Node.js or Docker required for basic usage.
- **OpenAPI 3.0 Support:** Full support for the latest OpenAPI features.
- **Auto-expansion Control:** Configured to start with collapsed operations for a cleaner overview (`docExpansion: "none"`).
- **Custom Styling:** Includes a hook for `index.css` to allow for custom branding and UI tweaks.
- **Multi-Server Support:** Pre-configured with multiple server environments (Production and Localhost).

## 📁 Project Structure

| File | Description |
| :--- | :--- |
| `index.html` | The main entry point that loads Swagger UI scripts and styles. |
| `swagger.yaml` | Your API specification file (OpenAPI/Swagger). |
| `swagger-initializer.js`| Initialization script where you configure Swagger UI behavior. |
| `assets/` | Contains the core Swagger UI distribution files (JS, CSS, images). |
| `README.md` | This documentation file. |

## ⚙️ Configuration

You can further customize the UI behavior in `swagger-initializer.js`. Common configurations include:

- `docExpansion`: Controls how the groups/operations are displayed (`list`, `full`, `none`).
- `deepLinking`: Enables/disables the ability to link directly to a specific endpoint.
- `defaultModelsExpandDepth`: Controls the default expansion depth for models.

---

*Happy Coding!* 🚀
