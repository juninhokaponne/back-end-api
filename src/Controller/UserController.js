const User = require('../Model/UsersModel');


class HttpExecption extends Error {
    message;
    status;
    code;

    constructor(message, status, code) {
        super(message);
        this.message = message;
        this.status = status;
        this.code = code;
    }
}

module.exports = {
    async createUser (req, res){
        
        function validadeUserFields(email, password){
            if(!email || !password){
                throw new HttpExecption('Email and password are required', 400, 'auth/invalid-credentials');
            }

            if(password.length <= 8) {
                throw new HttpExecption('Password must be at least 8 characters', 400, 'auth/invalid-credentials');
            }

            if(!email.includes('@')) {
                throw new HttpExecption('Invalid email', 400, 'auth/invalid-credentials');
            }
        }

        const { email, password } = req.body;
        
        try {
            validadeUserFields(email, password);
            await User.create({
                email,
                password
            });
            
            res.status(201).send({
                message: 'User created successfully',
            })

        }catch(error){
            if(error instanceof HttpExecption){
                res.status(error.status).json(error.message)
            }else{
                return res.status(500).json(error);
            }
        }
    },

    async listAllUsers (req, res){

        const users = await User.findAll({
            attributes: ['id', 'email', 'isAdmin'] 
            
        });

        res.status(200).send({
            users
        });
    }
}