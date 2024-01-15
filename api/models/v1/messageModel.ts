import mongoose, { Document, Model, Schema } from 'mongoose'

interface IMessage extends Document {
    sender: string;
    recipient: string;
    content: string;
    timestamp: Date;
}

const messageSchema = new Schema<IMessage>({
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
})

interface IMessageModel extends Model<IMessage> {

}

const Message: IMessageModel = mongoose.model<IMessage, IMessageModel>('Message', messageSchema);
export default Message