import {z} from 'zod';
const userValidationSchema = z.object({
    id:z.string(),
    password:z.string({
        invalid_type_error:'password must be string'
    }).max(20,{message:"pass word more then 20 character"}).optional(),
   
   

})
export const userValidation ={
    userValidationSchema
}