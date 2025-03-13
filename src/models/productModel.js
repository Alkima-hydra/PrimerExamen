import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true }
});

export default model('Product', productSchema);