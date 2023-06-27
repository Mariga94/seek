import Project from "../models/projectModel.js";

// CREATE READ UPDATE DELETE
export const createProject = async (req, res, next) => {
  if (!req.isSeller) {
    return res.status(403).send("You're not a seller");
  } else {
    const newProject = new Project({
      userId: req.userId,
      ...req.body,
    });
    try {
      const saveProject = await newProject.save();
      res.status(201).json(saveProject);
    } catch (err) {
      if (err instanceof Error) {
        return res.send(err.message);
      }
      return res.send("Cannot save");
    }
  }
};

export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.send("Project not found").status(404);
    } else {
      res.status(200).send(project);
    }
  } catch (err) {
    if (err instanceof Error) {
      return res.send(err.message);
    }
    return res.send("Something is wrong with getProject ");
  }
};

export const getProjects = async (req, res) => {
  const q = req.query;
  const filters = {
    ...(q.userId && {userId: q.userId}),
    ...(q.category && {category: q.category})
  }
  try {
    const projects = await Project.find(filters);
    res.send(projects).status(200);
  } catch (err) {
    if (err instanceof Error) {
      res.send(err.message);
    }
    res.send("Something is wrong");
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.userId !== req.userId) {
      return res.status(403).send("You can't delete someone else project");
    } else {
      await Project.findByIdAndDelete(req.params.id);
      res.status(200).send(project);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.send(error.message);
    }
    res.send("Something is wrong");
  }
};
