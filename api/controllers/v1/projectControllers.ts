import Project from "../../models/v1/projectModel";
import { NextFunction, Request, Response } from 'express'
// create project
export const createProject = async (req: Request, res: Response) => {
    if (req.userType !== 'employer') {
        res.status(403).json({ error: 'Access denied: Only employers can create projects' })
    }
    const newProject = new Project({
        userId: req.userId,
        ...req.body
    })
    try {
        const savedProject = await newProject.save();
        res.status(201).json(savedProject)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

// get project
export const getProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const project = await Project.findById(req.params.id);
        
        if (!project) {
            const error = { code: 404, message: 'Project Not found' }
            next(error)
        }
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({error:"Something went wrong"})
    }
}
// get projects
export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({error:'Something went wrong'})
    }
}
// modify project

// delete project