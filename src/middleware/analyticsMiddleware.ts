import Analytics from "../models/analytics.js";
import { Request, Response, NextFunction } from "express";

export const trackRead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookId = req.params.bookId;

    let analytics = await Analytics.findOne({ bookId });

    if (!analytics) {
      analytics = await Analytics.create({ bookId });
    }

    analytics.reads++;

    const today = new Date().toISOString().split("T")[0];

    const day = analytics.dailyReads.find((d) => d.date === today);

    if (day) day.count++;
    else analytics.dailyReads.push({ date: today as string, count: 1 });


    await analytics.save();
    next();
  } catch {
    next();
  }
};
