DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    price INT,
    rating SMALLINT,
    featured BOOLEAN
);
