export function isActivePath(currentPath, href) {
  if (currentPath === href) return true; // Exact match
  if (currentPath === "/" && (href === "/" || href === "/index.html"))
    return true; // Root path
  if (currentPath.includes(href)) return true; // Href is part of current path
  return false; // No match
}
