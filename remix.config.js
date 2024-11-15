/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  routes(defineRoutes) {
    return defineRoutes((route) => {
      //App routes
      route("/", "layout/app-layout/index.jsx", () => {
        route("/dashboard", "routes/apps/dashboard/route.jsx", { index: true });
        route("/apps/chat/chats", "routes/apps/chat/chats/route.jsx");
        route("/apps/chat/group", "routes/apps/chat/group/route.jsx");
        route("/apps/chat/contact", "routes/apps/chat/contact/route.jsx");
        route("/apps/chat-popup/direct-message", "routes/apps/chat-popup/direct-message/route.jsx");
        route("/apps/chat-popup/chat-bot", "routes/apps/chat-popup/chat-bot/route.jsx");
        route("/apps/calendar", "routes/apps/calendar/route.jsx");
        route("/apps/email", "routes/apps/email/route.jsx");
        route("/apps/scrumboard/project-board", "routes/apps/scrumboard/project-board/route.jsx");
        route("/apps/scrumboard/kanban-board", "routes/apps/scrumboard/kanban-board/route.jsx");
        route("/apps/scrumboard/pipeline", "routes/apps/scrumboard/pipeline/route.jsx");
        route("/apps/contact/contact-list", "routes/apps/contact/contact-list/route.jsx");
        route("/apps/contact/contact-cards", "routes/apps/contact/contact-cards/route.jsx");
        route("/apps/contact/edit-contact", "routes/apps/contact/edit-contact/route.jsx");
        route("/apps/file-manager/", "routes/apps/file-manager/route.jsx", () => {
          route("list-view", "routes/apps/file-manager/list-view/route.jsx", { index: true });
          route("grid-view", "routes/apps/file-manager/grid-view/route.jsx");
        });
        route("/apps/gallery", "routes/apps/gallery/route.jsx");
        route("/apps/todo/task-list", "routes/apps/todo/task-list/route.jsx");
        route("/apps/todo/gantt", "routes/apps/todo/gantt/route.jsx");
        route("/apps/blog/", "routes/apps/blog/route.jsx", () => {
          route("posts", "routes/apps/blog/posts/route.jsx", { index: true });
          route("add-new-post", "routes/apps/blog/add-new-post/route.jsx");
          route("post-detail", "routes/apps/blog/post-detail/route.jsx");
        });
        route("/apps/invoices/invoice-list", "routes/apps/invoices/invoice-list/route.jsx");
        route("/apps/invoices/invoice-templates", "routes/apps/invoices/invoice-templates/route.jsx");
        route("/apps/invoices/create-invoice", "routes/apps/invoices/create-invoice/route.jsx");
        route("/apps/invoices/invoice-preview", "routes/apps/invoices/invoice-preview/route.jsx");
        route("/apps/integrations/all-apps", "routes/apps/integrations/all-apps/route.jsx");
        route("/apps/integrations/app-detail", "routes/apps/integrations/app-detail/route.jsx");
        route("/apps/integrations/integration", "routes/apps/integrations/integration/route.jsx");
        //Profile
        route("/profile", "routes/apps/profile/route.jsx");
        route("/profile/edit-profile", "routes/apps/profile/edit-profile/route.jsx");
        route("/profile/account", "routes/apps/profile/account/route.jsx");
        //404
        route("/error-404", "routes/auth/error-404/route.jsx");
      });
      //Authentications
      route("/auth/", "layout/auth-layout/index.jsx", () => {
        route("login", "routes/auth/login/route.jsx", { index: true });
        route("login-simple", "routes/auth/login/simple/route.jsx");
        route("login-classic", "routes/auth/login/classic/route.jsx");
        route("signup", "routes/auth/signup/route.jsx");
        route("signup-simple", "routes/auth/signup/simple/route.jsx");
        route("signup-classic", "routes/auth/signup/classic/route.jsx");
        route("lock-screen", "routes/auth/lock-screen/route.jsx");
        route("reset-password", "routes/auth/reset-password/route.jsx");
        route("error-503", "routes/auth/error-503/route.jsx");
      })
      //error pages
    });
  },
};
