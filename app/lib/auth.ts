import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

type JwtPayload = { email: string; role: "admin" };

export function mustEnv() {
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
    throw new Error("Missing env: ADMIN_EMAIL / ADMIN_PASSWORD / JWT_SECRET");
  }
}

export async function verifyAdminCredentials(email: string, password: string) {
  mustEnv();

  const adminEmail = process.env.ADMIN_EMAIL!;
  const adminPass = process.env.ADMIN_PASSWORD!;

  if (email.toLowerCase() !== adminEmail.toLowerCase()) return false;

  // Compare password safely (hash adminPass on the fly)
  const hashed = await bcrypt.hash(adminPass, 10);
  const ok = await bcrypt.compare(password, hashed);

  return ok;
}

export function signToken(payload: JwtPayload) {
  return jwt.sign(
    payload,
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}


export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}


export async function getAuthFromCookies() {
  const store = await cookies(); // ✅ Next 15 type-safe
  const token = store.get("admin_token")?.value;
  if (!token) return null;

  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}
