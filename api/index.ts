import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { from, message } = req.body;

  if (from === "" && message === "") {
    return res.status(400).json({ message: "No message was entered." });
  }

  return res.status(200).json({ message: message });
}
