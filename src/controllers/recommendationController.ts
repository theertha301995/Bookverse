import { Request, Response } from "express";
import { getAIRecommendations } from "../services/recommendationServices.js";

export const recommendBooks = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    const recommendations = await getAIRecommendations(userId);

    res.json({
      success: true,
      count: recommendations.length,
      recommendations
    });
  } catch (err) {
    console.error("AI Recommendation Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to generate recommendations."
    });
  }
};
