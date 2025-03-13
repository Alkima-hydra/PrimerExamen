import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    ocupacion: { type: String, required: true }
});

export default model('User', userSchema);