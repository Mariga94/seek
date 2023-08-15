import mongoose, { Document, Model, Schema } from 'mongoose'

interface IProject extends Document {
    userId: string;
    projectTitle: string;
    category: string;
    freelanceType: string;
    priceType: string;
    cost: Number;
    deliverBy: string;
    country: string;
    city: string;
    languages: string[];
    programmingLanguage: string;
    projectDetails: string;
    attachments: string[]
}

const projectSchema: Schema<IProject> = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        projectTitle: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ['web application', 'mobile appication', 'data science', 'data analysis'],
            required: true,
        },
        projectDetails: {
            type: String,
            required: true
        },
        attachments: [{
            type: String,
            required: false
        }],
        cost: {
            type: Number,
            required: true,
        },
        programmingLanguage: {
            type: String,
            required: true
        },
        deliverBy: {
            type: String,
            required: true,
        }
    }
)

// Define User model type
interface IProjectModel extends Model<IProject> {

}

// Create and export User model
const Project: IProjectModel = mongoose.model<IProject, IProjectModel>('Project', projectSchema);
export default Project

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