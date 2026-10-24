import { NextResponse, type NextRequest } from "next/server";
import { seoRedirects } from "./app/data/seoRedirects";

export function proxy(request: NextRequest) {
  const url = new URL(request.url);
  const destination = seoRedirects[url.pathname.replace(/\/$/, "")];
  const productionHost = url.hostname === "baitecoptics.com" || url.hostname === "www.baitecoptics.com";
  if (destination || (productionHost && (url.protocol !== "https:" || url.hostname !== "baitecoptics.com"))) {
    if (destination) url.pathname = destination;
    if (productionHost) { url.protocol = "https:"; url.hostname = "baitecoptics.com"; url.port = ""; }
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_vinext|_next|favicon).*)"] };
