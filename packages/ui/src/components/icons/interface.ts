export enum IconNames {
  "bed" = "bed",
  "add-symbol" = "add-symbol",
  "bath" = "bath",
  "bucket" = "bucket",
  "current-location" = "current-location",
  "garage" = "garage",
  "area-size" = "area-size",
  "clock" = "clock",
  "dashboard" = "dashboard",
  "document-add" = "document-add",
  "document-view" = "document-view",
  "document-edit" = "document-edit",
  "users" = "users",
  "sales" = "sales",
  "user" = "user",
  "user-identification" = "user-identification",
  "user-profile" = "user-profile",
  "user-access-gateway" = "user-access-gateway",
  "user-delete" = "user-delete",
  "mail-replay" = "mail-replay",
  "sales-channel" = "sales-channel",
  "credentials" = "credentials",
  "white-label" = "white-label",
  "app-connection" = "app-connection",
  "request-to-join" = "request-to-join",
  "request-trafic" = "request-trafic",
  "tenants" = "tenants",
  "requset-project" = "requset-project",
  "requested-projects" = "requested-projects",
  "calendar" = "calendar",
  "features" = "features",
  //   "funnel" = "funnel",
  "reset" = "reset",
  "dropdown" = "dropdown",
  "search" = "search",
  "arrow-left" = "arrow-left",
  "double-arrow-left" = "double-arrow-left",
  "arrow-right" = "arrow-right",
  "double-arrow-right" = "double-arrow-right",
  //   "arrow-up" = "arrow-up",
  "arrow-down" = "arrow-down",
  "arrow-up-right" = "arrow-up-right",
  "arrow-down-right" = "arrow-down-right",
  "arrow-up-left" = "arrow-up-left",
  "arrow-down-left" = "arrow-down-left",
  "xls" = "xls",
  "xlsx" = "xlsx",
  "3-line-menu" = "3-line-menu",
  "eye-close" = "eye-close",
  "eye-open" = "eye-open",
  "bell" = "bell",
  "no-sort" = "no-sort",
  "sort-desc" = "sort-desc",
  "sort-asc" = "sort-asc",
  "pie-chart" = "pie-chart",
  "combo-cart" = "combo-cart",
  "trophy" = "trophy",
  "password" = "password",
  //   "chat" = "chat",
  "close" = "close",
  "close-circle" = "close-circle",
  "view-off" = "view-off",
  "aword" = "aword",
  "edit" = "edit",
  "home" = "home",
  "image" = "image",
  "lots" = "lots",
  "view" = "view",
  "list-bullet" = "list-bullet",
  "trash" = "trash",
  "cloud-data-transfer" = "cloud-data-transfer",
  "chat" = "chat",
  "save" = "save",
  "company-profile" = "company-profile",
  "check-list" = "check-list",
  "testimonial" = "testimonial",
  "audit-log" = "audit-log",
  "template-design" = "template-design",
  "building-type" = "building-type",
  "map" = "map",
  "map-with-pin" = "map-with-pin",
  "map-pin" = "map-pin",
  "globe" = "globe",
  "report" = "report",
  "leads" = "leads",
  "office" = "office",
  "funnel" = "funnel",
  "link-document" = "link-document",
  "link" = "link",
  "star" = "star",
  "star-outline" = "star-outline",
  "star-half" = "star-half",
  "setting" = "setting",
  "copy" = "copy",
  "upload-to-cloud" = "upload-to-cloud",
  "doc" = "doc",
  "docx" = "docx",
  "pdf" = "pdf",
  "jpg" = "jpg",
  "png" = "png",
  "ppt" = "ppt",
  "pptx" = "pptx",
  "projects" = "projects",
  "camera" = "camera",
  "notification-off" = "notification-off",
  "notification-on" = "notification-on",
  "loading" = "loading",
  "summary" = "summary",
  "privilege" = "privilege",
  "notification-menu" = "notification-menu",
  "back-icon" = "back-icon",
  "twitter" = "twitter",
  "facebook" = "facebook",
  "linkedin" = "linkedin",
  "instagram" = "instagram",
  "info" = "info",
  "drawerBackground" = "drawerBackground",
  "requestPath" = "requestPath",
  //   "bed" = "bed",
  //   "bath" = "bath",
  "car" = "car",
  "email" = "email",
  "security" = "security",
  "news" = "news",
  "security options" = "security options",
  "logout" = "logout",
  "lock" = "lock",
  "lock-bolder" = "lock-bolder",
  "phone" = "phone",
  "youtube" = "youtube",
}

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string;
  className?: string;
}
