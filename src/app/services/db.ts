const { MONGODB_URL } = process.env;
export const connectionStr = MONGODB_URL || "";
