import { createHash, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "rinon_admin";

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

export function getAdminToken() {
  const password = process.env.ADMIN_PASSWORD;
  return password ? digest(`rinon-admin:${password}`).toString("hex") : null;
}

export function isValidAdminToken(value?: string) {
  const expected = getAdminToken();
  if (!expected || !value) return false;
  const actualBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}

export function isValidAdminPassword(value: string) {
  const expected = process.env.ADMIN_PASSWORD;
  return expected ? timingSafeEqual(digest(value), digest(expected)) : false;
}
