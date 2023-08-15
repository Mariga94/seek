import mongoose, { Document, Model, Schema } from 'mongoose'

// Define interface for User document
interface IUser extends Document {
    userType: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema: Schema<IUser> = new Schema(
    {
        userType: {
            type: String,
            enum: ['freelancer', 'employer'],
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Define User model type
interface IUserModel extends Model<IUser> {

}

// Create and export User model
const User: IUserModel = mongoose.model<IUser, IUserModel>('User', userSchema);
export default User

// const User = mongoose.model("User", userSchema)
// export default User