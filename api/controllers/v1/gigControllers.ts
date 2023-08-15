import Gig from "../../models/v1/gigModel";
import { Request, Response } from 'express'

// create gig
export const createGig = async (req: Request, res: Response) => {
    if (req.userType !== 'freelancer') {
        res.status(403).json({ error: 'Access denied: Only freelancers can create gigs' })
    }
    const newGig = new Gig({
        userId: req.userId,
        ...req.body
    })
    try {
        console.log(newGig)
        const savedGig = await newGig.save()
        console.log('savedGig', savedGig)
        res.status(201).json(savedGig)
    } catch (error) {
        res.status(500).send({ error: "Something is wrong!" })
    }
}
// get gig
export const getGig = async (req: Request, res: Response) => {
    try {
        const gig = await Gig.findById(req.params.id);
        res.status(200).json(gig)
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' })
    }
}
// get all gigs
export const getGigs = async (req: Request, res: Response) => {
    try {
        const gigs = await Gig.find()
        res.status(200).json(gigs)
    } catch (error) {
        res.status(500).json({ error: 'An internal server error occured!' })
    }
}
// delete gig
export const deleteGig = async (req: Request, res: Response) => {
    try {
        const deletedGig = await Gig.findByIdAndDelete(req.params.id);
        if (deletedGig) {
            res.status(200).json({ "success": true, "message": 'Gig deleted successfully' })
        } else {
            res.status(404).json({ success: false, message: "Gig not found" })
        }
    } catch (error) {
        console.error('Errror deleting gig:', error)
        res.status(500).json({ error: 'An internal server error occured!' })
    }
}
// update gig
export const updateGig = async (req: Request, res: Response) => {
    try {
        const updatedGig = await Gig.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (updatedGig) {
            res.status(200).json({success: true, message: 'Gig updated successfully'})
        } else {
            res.status(404).json({success: false, message: 'Gig not found'})
        }
    } catch (error) {
        console.error('Error updating gig:', error);
        res.status(500).json({success: false, message: 'an internal server error occurred'})
    }
}

