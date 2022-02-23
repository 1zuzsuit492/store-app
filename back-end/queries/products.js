const db = require('../db/dbConfig');

const getAllProducts = async () => {
    try {
        const products = await db.any('SELECT * FROM products');
        return products;
        //db.any query the database, await is waiting for anything after to finish
    } catch (err) {
        return err;
    }
};

const addNewProducts = async (products) => {
    const { name, description, price, rating, featured } = products;
    try {
        const newProducts = await db.one("INSERT INTO products (name, description, price, rating, featured) VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, description, price, rating, featured]);
        return newProducts;
    }
    catch (err) {
        return err;
    }
}

const getProduct = async (id) => {
    try {
        const product = await db.one("SELECT * FROM products WHERE id=$1", id);//.one returns one item. .any returns an array of one object **sql interpolation**

        //const so = await db.one(`select * from products where ${id} = id)
        return product;
    }
    catch (error) {
        return error;
    }
};

const deleteProduct = async (id) => {
    try {
        const product = await db.one("DELETE FROM products WHERE id=$1", id);
        return product;
    }
    catch (err) {
        return err;
    }
}

const updateProduct = async ({ name, description, price, rating, featured }, id) => {
    try {
        const product = await db.one("UPDATE products SET name =$1, description=$2, price=$3, rating=$4, featured= $5 WHERE id=$6 RETURNING *", [name, description, price, rating, featured]);
        return product;
    }
    catch (err) {
        return err;
    }
}

module.exports = {
    getAllProducts,
    addNewProducts,
    getProduct,
    deleteProduct,
    updateProduct
}