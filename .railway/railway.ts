import { defineRailway, postgres, project, service } from "railway/iac";
export default defineRailway(() => {
  const db = postgres("spike-db");
  const web = service("spike-web", {
    source: { image: "ghcr.io/railwayapp/hello-world:latest" },
    env: { DATABASE_URL: db.env.DATABASE_URL },
  });
  return project("agent-demo", { resources: [db, web] });
});
