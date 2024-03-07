import User from '../model/user.model.js'
import { errorHandler } from '../utlis/error.js';

export const signup = async (req, res, next) => {
    const { fullname, email, password } = req.body;

    if(!fullname ||  !email || !password || fullname === "" ||  email === "" || password === ""){
       next(errorHandler(400), 'Alle fields er nødvendig');
       };

    const newUser = new User({
        fullname,
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