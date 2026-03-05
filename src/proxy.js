import { NextResponse } from "next/server";

/**
 * Patterns commonly probed by automated scanners, bots, and exploit scripts.
 * None of these paths exist on this site — any request to them is a probe.
 * We redirect silently to the homepage rather than returning an error code,
 * which gives scanners no useful information to work with.
 */
const ATTACK_PATTERNS = [
  // WordPress probes (this is not a WordPress site)
  /^\/wp-/i,
  /^\/wordpress/i,
  /^\/xmlrpc\.php/i,

  // PHP / classic CMS probes
  /\.php$/i,
  /\.asp(x?)$/i,
  /\.jsp$/i,
  /\.cgi$/i,

  // Environment & config file probes
  /^\/.env/i,
  /^\/.git/i,
  /^\/\.htaccess/i,
  /^\/\.htpasswd/i,
  /^\/web\.config/i,
  /^\/config\.(php|json|yml|yaml|xml)/i,
  /^\/secrets/i,
  /^\/credentials/i,

  // Admin panel probes
  /^\/admin/i,
  /^\/administrator/i,
  /^\/panel/i,
  /^\/cpanel/i,
  /^\/dashboard/i,
  /^\/manage/i,
  /^\/manager/i,
  /^\/login/i,
  /^\/signin/i,

  // Database management tools
  /^\/phpmyadmin/i,
  /^\/pma/i,
  /^\/mysql/i,
  /^\/sqlite/i,
  /^\/adminer/i,

  // PHP diagnostic pages
  /^\/phpinfo/i,
  /^\/info\.php/i,
  /^\/test\.php/i,

  // Common shell / backdoor probes
  /^\/shell/i,
  /^\/cmd/i,
  /^\/backdoor/i,
  /^\/webshell/i,
  /^\/c99/i,
  /^\/r57/i,

  // Backup & dump files
  /\.(sql|bak|backup|dump|db|log|old|swp|orig)$/i,
  /^\/backup/i,
  /^\/dump/i,
  /^\/db/i,

  // Infrastructure / framework probes
  /^\/actuator/i,
  /^\/swagger/i,
  /^\/api-docs/i,
  /^\/graphql/i,
  /^\/solr/i,
  /^\/jenkins/i,
  /^\/jmx-console/i,

  // Common traversal characters in path
  /\.\.\//,
  /%2e%2e/i,
  /%252e/i,
];

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const isProbe = ATTACK_PATTERNS.some((pattern) => pattern.test(pathname));

  if (isProbe) {
    // Redirect silently to homepage — gives scanners nothing useful
    return NextResponse.redirect(new URL("/", request.url), { status: 302 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths EXCEPT:
     * - Next.js internals (_next/static, _next/image)
     * - Public static assets (images in /evanbarbers/, favicons, svgs)
     * - The actual site pages are handled normally
     */
    "/((?!_next/static|_next/image|favicon\\.ico|evanbarbers/|file\\.svg|globe\\.svg|next\\.svg|vercel\\.svg|window\\.svg).*)",
  ],
};
