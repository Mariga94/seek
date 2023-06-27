import Review from "../models/reviewModel.js";
import Project from "../models/projectModel.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller) {
    res.send("Sellers can't create a review").status(403);
  }

  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    description: req.body.description,
  });

  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review) {
      res.send("You have already created a review").status(403);
    }
    const saveReview = await newReview.save();
    await Project.findByIdAndUpdate(req.body.gigId, {});
    res.status(201).send(saveReview);
  } catch (err) {
    if (err instanceof Error) {
      res.send(err.message);
    }
  }
};

export const getReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({gigId: req.params.gigId})
        res.status(200).send(reviews);
    } catch(err) {
        res.send("Something is wrong").status()
    }
}

export const deleteReview = async (req, res) => {
  try {
    
  } catch (err) {

  }
}

