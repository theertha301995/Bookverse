import Report from "../models/report.js";
export const createReport = async (req, res) => {
    try {
        const reporterId = req.user?.id;
        const { targetType, targetId, reason, details } = req.body;
        if (!targetType || !targetId || !reason) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        // prevent duplicate reports
        const existing = await Report.findOne({
            reporterId,
            targetType,
            targetId,
            status: "Pending",
        });
        if (existing) {
            return res.status(400).json({
                message: "You have already reported this item and it's pending review.",
            });
        }
        const newReport = await Report.create({
            reporterId,
            targetType,
            targetId,
            reason,
            details,
        });
        res.status(201).json(newReport);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// ADMIN: Get all reports
export const getAllReports = async (req, res) => {
    try {
        const { status } = req.query;
        const filter = {};
        if (status)
            filter.status = status;
        const reports = await Report.find(filter)
            .populate("reporterId", "username")
            .populate("adminId", "username")
            .sort({ createdAt: -1 });
        res.json(reports);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// ADMIN: Take action on report
export const handleReport = async (req, res) => {
    try {
        const adminId = req.user?.id;
        const { status, adminNotes } = req.body;
        if (!["Resolved", "Dismissed"].includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }
        const report = await Report.findByIdAndUpdate(req.params.id, { status, adminId, adminNotes }, { new: true });
        if (!report)
            return res.status(404).json({ message: "Report not found" });
        res.json(report);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//# sourceMappingURL=reportController.js.map