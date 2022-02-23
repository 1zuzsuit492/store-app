DROP DATABASE IF EXISTS cta;
CREATE DATABASE cta;

\c cta;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    price INT,
    rating INT,
    featured BOOLEAN
);
