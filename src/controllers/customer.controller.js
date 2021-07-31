const dbService = require('../services/db.service');

const controller = {
    list: (req, res) => {
        const noticeContent = req.session.noticeContent ?? '';
        req.session.noticeContent = '';
        req.session.visits = req.session.visits ? ++req.session.visits : 1; // Contador de visitas

        req.getConnection(
            dbService.getAllCustomers((error, customers) => {
                if (error) {
                    throw new Error(error);
                } else {
                    res.render('customers', {
                        data: customers,
                        editMode: false,
                        customerToEdit: null,
                        noticeContent: noticeContent,
                        visits: req.session.visits
                    });
                }
            })
        );
    },

    save: (req, res) => {
        const data = req.body;

        req.getConnection(
            dbService.insertNewCustomer(data, (error, _data) => {
                if (error) {
                    throw new Error(error);
                } else {
                    req.session.noticeContent = 'Record created successfully!';
                    res.redirect('/');
                }
            })
        );
    },

    edit: (req, res) => {
        const id = req.params.id;

        req.getConnection(
            dbService.getAllCustomers((error, customers) => {
                if (error) throw new Error(error);

                const foundCustomer = customers.find(customer => customer.id == id);
                if (!foundCustomer) {
                    throw new Error(`Error, id: ${id} is not a valid id.`);
                } else {
                    res.render('customers', {
                        data: customers,
                        editMode: true,
                        customerToEdit: { ...foundCustomer },
                        noticeContent: '',
                        visits: req.session.visits
                    });
                }
            })
        );
    },

    update: (req, res) => {
        const id = req.params.id;
        const customer = req.body;

        req.getConnection(
            dbService.updateCustomerById(customer, id, (error, _data) => {
                if (error) {
                    throw new Error(error);
                } else {
                    req.session.noticeContent = 'Data updated successfully!';
                    res.redirect('/');
                }
            })
        );
    },

    delete: (req, res) => {
        const id = req.params.id;

        req.getConnection(
            dbService.deleteCustomerById(id, (error, _data) => {
                if (error) {
                    throw new Error(error);
                } else {
                    req.session.noticeContent = 'Data deleted successfully!';
                    res.redirect('/');
                }
            })
        );
    }
};

module.exports = controller;
