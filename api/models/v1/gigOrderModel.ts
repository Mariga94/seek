import mongoose, { Document, Model, Schema } from 'mongoose'

interface IOrder extends Document {
    gigId: string;
    orderTitle: string;
    price: Number;
    employerId: string;
    freelancerId: string;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const orderSchema: Schema<IOrder> = new Schema(
    {
        gigId: {
            type: String,
            required: true,
        },
        orderTitle: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        employerId: {
            type: String,
            required: true,
        },
        freelancerId: {
            type: String,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    })

// Define User model type
interface IOrderModel extends Model<IOrder> {

}

// Create and export User model
const Order: IOrderModel = mongoose.model<IOrder, IOrderModel>('Order', orderSchema);
export default Order