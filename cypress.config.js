import { defineConfig } from "cypress";
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";
import { pa11y } from "@cypress-audit/pa11y";

export default defineConfig({
  projectId: "4strrf",
  e2e: {
    setupNodeEvents(on, config) {    
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });     
    },
  },
});
