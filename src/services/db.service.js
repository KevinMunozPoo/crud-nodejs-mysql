const databaseActions = {

    getAllCustomers(callback) {
        return function (error, connection) {
            if (error) throw new Error(error);
            else connection.query('SELECT * FROM customers', callback);
        };
    },

    insertNewCustomer(data, callback) {
        return function (error, connection) {
            if (error) throw new Error(error);
            else connection.query('INSERT INTO customers SET ?', [data], callback);
        };
    },

    updateCustomerById(customer, id, callback) {
        return function (error, connection) {
            if (error) throw new Error(error);
            else connection.query('UPDATE customers SET ? WHERE id = ?', [customer, id], callback);
        };
    },

    deleteCustomerById(id, callback) {
        return function (error, connection) {
            if (error) throw new Error(error);
            else connection.query('DELETE FROM customers WHERE id = ?', [id], callback);
        };
    }
};

module.exports = databaseActions;
