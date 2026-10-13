export type NavigationItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] as const satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
