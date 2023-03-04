import User from "../../../models/user";

import dbConnect from "../../../config/dbConnect";

export default async function handler(req, res) {
  if (req.method == "POST") {
    dbConnect();

    const { email, password } = req.body;

    const user = await User.create({ email, password });

    res.status(201).json({ user });
  }
}
