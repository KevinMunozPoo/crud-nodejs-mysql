const controller = {
    list: (req, res) => {
        const noticeContent = req.session.noticeContent ?? '';
        req.session.noticeContent = '';
        req.session.visits = req.session.visits ? ++req.session.visits : 1; // Contador de visitas

        req.getConnection((err1, conn) => {
            if (err1) return res.send(err1);
            conn.query('SELECT * FROM customers', (err2, customers) => {
                if (err2) return res.send(err2);
                else {
                    res.render('customers', {
                        data: customers,
                        editMode: false,
                        customerToEdit: null,
                        noticeContent: noticeContent,
                        visits: req.session.visits
                    });
                }
            });
        });
    },

    save: (req, res) => {
        const data = req.body;
        req.getConnection((err1, conn) => {
            if (err1) return res.send(err1);
            else {
                conn.query('INSERT INTO customers SET ?', [data], (err2, _data) => {
                    if (err2) return res.send(err2);
                    else {
                        req.session.noticeContent = 'Record created successfully!';
                        res.redirect('/');
                    }
                });
            }
        });
    },

    edit: (req, res) => {
        const id = req.params.id;
        console.log('Id: ' + id);
        req.getConnection((err1, conn) => {
            if (err1) return res.send(err1);
            else {
                conn.query('SELECT * FROM customers', (err2, customers) => {
                    if (err2) return res.send(err2);
                    const foundCustomer = customers.find(customer => customer.id == id);
                    if (!foundCustomer) return res.send(': ' + id + `Error, id: ${id} is not a valid id.`);
                    else {
                        res.render('customers', {
                            data: customers,
                            editMode: true,
                            customerToEdit: { ...foundCustomer },
                            noticeContent: '',
                            visits: req.session.visits
                        });
                    }
                });
            }
        });
    },

    update: (req, res) => {
        const id = req.params.id;
        const customer = req.body;
        req.getConnection((err1, conn) => {
            if (err1) return res.send(err1);
            else {
                conn.query('UPDATE customers SET ? WHERE id = ?', [customer, id], (err2, _data) => {
                    if (err2) return res.send(err2);
                    else {
                        req.session.noticeContent = 'Data updated successfully!';
                        res.redirect('/');
                    }
                });
            }
        });
    },

    delete: (req, res) => {
        const id = req.params.id;
        console.log('Id: ' + id);
        req.getConnection((err1, conn) => {
            if (err1) return res.send(err1);
            else {
                conn.query('DELETE FROM customers WHERE id = ?', [id], (err2, _data) => {
                    if (err2) return res.send(err2);
                    else {
                        req.session.noticeContent = 'Data deleted successfully!';
                        res.redirect('/');
                    }
                });
            }
        });
    }
};

module.exports = controller;
