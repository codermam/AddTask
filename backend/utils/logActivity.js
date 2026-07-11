import Activity from "../models/Activity.js";

const logActivity = async (userId, action, message) => {
  try {
    await Activity.create({
      user: userId,
      action,
      message,
    });
  } catch (error) {
    console.log(error);
  }
};

export default logActivity;