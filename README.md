# Store-API

## Overview
This repository contains a Store API built using Node.js and Express. The API provides endpoints for retrieving a list of products and allows for querying and filtering product data. It is designed to be efficient and scalable, making it easy to integrate with front-end applications.

## Features
- Retrieve All Products: Fetch a list of all products with optional filtering and sorting.
- Static Products: Retrieve a static list of products based on predefined criteria.
- Query Parameters: Support for querying products by features such as name, company, price, and rating.
- Sorting and Field Selection: Sort products and select specific fields to be returned.
- Pagination: Efficiently handle large sets of products with pagination.

## Technologies Used
- Node.js: JavaScript runtime for server-side development.
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- MongoDB: NoSQL database for storing product information.
- Mongoose: Elegant MongoDB object modeling for Node.js.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Elkady-Code/Store-API
    ```
2. Navigate to the project directory:
    ```sh
    cd store-api
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables (create a `.env` file in the root directory):
    ```env
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    ```
5. Start the server:
    ```sh
    npm start
    ```

## Usage
After starting the server, you can use tools like Postman or cURL to interact with the API endpoints.

### API Endpoints

#### Products
- **GET /api/v1/products**
  - Description: Retrieve all products with optional query parameters for filtering, sorting, and pagination.
  - Query Parameters:
    - `Featured`: Boolean to filter featured products.
    - `company`: String to filter products by company.
    - `name`: String to search products by name.
    - `sort`: String to sort products by specified fields.
    - `fields`: String to select specific fields to return.
    - `numericFilters`: String to filter products by price and rating using operators (>, >=, =, <, <=).
    - `page`: Number for pagination (default: 1).
    - `limit`: Number of items per page (default: 10).
  - Response: JSON object containing the list of products and the number of hits.

- **GET /api/v1/products/static**
  - Description: Retrieve a static list of products with predefined criteria.
  - Response: JSON object containing the list of products and the number of hits.

## Example Requests
- Retrieve all products:
  ```sh
  GET /api/v1/products

## Example URL Testing

Below are some example URLs that demonstrate how to use various query parameters to filter, sort, and paginate products in the `getAllProducts` endpoint.

### Example: Get Featured Products from a Specific Company

Retrieve featured products from Apple, sorted by price in ascending order, displaying only the name and price fields.

```plaintext
GET /api/products?Featured=true&company=Apple&sort=price&fields=name,price
```
## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.


