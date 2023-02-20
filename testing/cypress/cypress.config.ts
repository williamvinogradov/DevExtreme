import {defineConfig} from 'cypress';
import {addCucumberPreprocessorPlugin} from '@badeball/cypress-cucumber-preprocessor';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/dist/plugin';

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // cucumber
  await addCucumberPreprocessorPlugin(on, config);

  // ts
  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript'),
    })
  );

  // screenshot comparer
  getCompareSnapshotsPlugin(on, config);

  return config;
}

export default defineConfig({
  e2e: {
    specPattern: './testing/cypress/e2e/**/*.feature',
    supportFile: './testing/cypress/support/e2e.ts',
    setupNodeEvents,
  },
});
