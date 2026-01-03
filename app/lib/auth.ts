import jwt, { JwtPayload as JwtCorePayload, SignOptions } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

type JwtPayload = JwtCorePayload & {
  email: string;
  role: "admin";
};

/**
 * Ensure required env vars exist
 */
export function mustEnv() {
  if (
    !process.env.ADMIN_EMAIL ||
    !process.env.ADMIN_PASSWORD ||
    !process.env.JWT_SECRET
  ) {
    throw new Error(
      "Missing env: ADMIN_EMAIL / ADMIN_PASSWORD / JWT_SECRET"
    );
  }
}

/**
 * Verify admin credentials
 */
export async function verifyAdminCredentials(
  email: string,
  password: string
) {
  mustEnv();

  const adminEmail = process.env.ADMIN_EMAIL!;
  const adminPass = process.env.ADMIN_PASSWORD!;

  if (email.toLowerCase() !== adminEmail.toLowerCase()) {
    return false;
  }

  /**
   * IMPORTANT:
   * Admin password should already be hashed in env (recommended),
   * but this fallback keeps current setup working.
   */
  const hashed =
    adminPass.startsWith("$2")
      ? adminPass
      : await bcrypt.hash(adminPass, 10);

  return bcrypt.compare(password, hashed);
}

/**
 * Sign JWT (TypeScript-safe for jsonwebtoken v9)
 */
export function signToken(payload: JwtPayload) {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

/**
 * Verify JWT
 */
export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}

/**
 * Read auth from cookies (Next.js App Router safe)
 */
export async function getAuthFromCookies() {
  const store = cookies(); // ✅ Next.js 15+ (no await needed)
  const token = store.get("admin_token")?.value;

  if (!token) return null;

  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}
