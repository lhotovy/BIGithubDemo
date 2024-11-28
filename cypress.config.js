import { defineConfig } from "cypress";
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";
import { pa11y } from "@cypress-audit/pa11y";
import fs from "fs";

export default defineConfig({
  projectId: "4strrf",
  e2e: {
    setupNodeEvents(on, config) {    
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse((lighthouseReport) => {
          console.log("---- Writing lighthouse report to disk ----");
    
          fs.writeFile("lighthouse.html", lighthouseReport.report, (error) => {
            error ? console.log(error) : console.log("Report created successfully");
          });
        }),
        pa11y: pa11y(console.log.bind(console)),
      });     
    },
  },
});
