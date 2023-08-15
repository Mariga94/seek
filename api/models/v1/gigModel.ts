import mongoose, { Document, Model, Schema } from 'mongoose'

interface IGig extends Document {
    userId: string;
    gigTitle: string;
    category: string;
    freelanceType: string;
    priceType: string;
    budget: Number;
    deliverBy: string;
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
            enum: ['web application', 'mobile appication', 'data science', 'data analysis'],
            required: true,
        },
        gigDetails: {
            type: String,
            required: true
        },
        attachments: [{
            type: String,
            required: false
        }],
        budget: {
            type: Number,
            required: true,
        },
        programmingLanguage: {
            type: String,
            required: false
        },
        deliverBy: {
            type: String,
            required: true,
        }
    }
)

// Define User model type
interface IGigModel extends Model<IGig> {

}

// Create and export User model
const Gig: IGigModel = mongoose.model<IGig, IGigModel>('Gig', gigSchema);
export default Gig

/**
 * project title
 * category
 * freelance type
 * price type
 * cost
 * project duration
 * level
 * country
 * city
 * languages
 * skills
 * project detail
 * attachments
 */