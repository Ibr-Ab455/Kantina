import User from '../model/user.model.js'
import { errorHandler } from '../utlis/error.js';

export const signup = async (req, res, next) => {
    const { fullname, username, email, password } = req.body;

    if(!fullname || !username || !email || !password || fullname === "" || username === "" || email === "" || password === ""){
       next(errorHandler(400), 'Alle fields er nødvendig');
       };

    const newUser = new User({
        fullname,
        username,
        email,
        password
    })

    await newUser.save();

    try {
        await newUser.save();
        res.json('Signup successfully')
      } 
      catch (error) {
       next(error)
      }
      
};