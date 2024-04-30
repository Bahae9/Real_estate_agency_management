export const generateBreadcrumbPaths = (pathname: string) => {
  const paths = pathname.split("/").filter((x) => x);
  const breadcrumbItems = paths.map((path, index) => ({
    name: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
    path: "/" + paths.slice(0, index + 1).join("/"),
    isLast: index === paths.length - 1,
  }));
  return breadcrumbItems;
};
export const isActiveSideBar = (pathname: string, link: string) =>
  link === "/" ? pathname === "/" : pathname.startsWith(link);
