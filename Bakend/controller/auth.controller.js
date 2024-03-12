import User from '../model/users.model.js'
import { errorHandler } from '../utlis/error.js';
import bcryptjs from 'bcryptjs'
import jwt  from 'jsonwebtoken';


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password || username === "" || email === "" || password === ""){
       next(errorHandler(400), 'Alle fields er nødvendig');
       };

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
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

export const signin = async (req, res, next) => {
  const { email, password } =  req.body;

  if(!email || !password || email === '' || password === ''){
    next(errorHandler(400), 'Alle fields er nødvendig');
  }

  try {
    const validUser = await User.findOne({  email });
    if(!validUser){
        next(errorHandler(400, 'Login not successful'))
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){
      return next(errorHandler(400, 'Login not successful'))
    }
      
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res.status(200).cookie('access_token', token, {
      httpOnly: true
    }).json('Signin successfully');

  } catch (error){
    next(error)
  }
}