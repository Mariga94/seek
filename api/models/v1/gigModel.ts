import mongoose, { Document, Model, Schema } from 'mongoose'

interface IGig extends Document {
    userId: string;
    gigTitle: string;
    category: string;
    freelanceType: string;
    priceType: string;
    cost: string;
    projectDuration: string;
    country: string;
    city: string;
    languages: string[];
    programmingLanguage: string;
    gigDetails: string;
    attachments: string[]
}

const gigSchema: Schema<IGig> = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        gigTitle: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ['Web application', 'Mobile application', 'Data science', 'Data analysis'],
            required: true,
        },
        gigDetails: {
            type: String,
            required: false
        },
        attachments: [{
            type: String,
            required: false
        }],
        cost: {
            type: String,
            required: true,
        },
        programmingLanguage: {
            type: String,
            required: false
        },
        projectDuration: {
            type: String,
            required: false,
        }
    }
)

// Define User model type
interface IGigModel extends Model<IGig> {

}

// Create and export User model
const Gig: IGigModel = mongoose.model<IGig, IGigModel>('Gig', gigSchema);
export default Gig
