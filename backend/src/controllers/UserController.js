const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async store(req, res) {
        const { name, email, phone, address }  = req.body;

        const user = await User.create({
            name,
            email,
            phone,
            address,
        });

        return res.json(user);
    },

    async delete(req, res) {
        await User.deleteOne({_id : req.params.id});
        
        res.json({deleted: true});
    },

    async edit(req, res){
        const { name, email, phone, address }  = req.body;

        const user = await User.updateOne({_id : req.params.id}, {
            name,
            email,
            phone,
            address,
        });

        return res.json(user);
    },

    async view(req, res){
        const user = await User.findById({_id : req.params.id});

        return res.json(user);
    }
};
