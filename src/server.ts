import dotenv from 'dotenv';
import app from './app'

 dotenv.config()

 const PORT = process.env.PORT || 4000
console.log('NODE_ENV:', process.env.NODE_ENV);

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
 })