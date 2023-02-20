/* eslint-disable @typescript-eslint/no-unsafe-return, import/no-extraneous-dependencies */
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { data } from './data';

const widgetOptions = {
  simpleSearchPanel: {
    dataSource: data,
    keyExpr: 'Id',
    columns: ['ColumnA', 'ColumnB', 'ColumnC'],
    searchPanel: {
      visible: true,
    },
  },
};

Given('create grid with {string}',
  (widgetOptionsName: string) => {
    const options = widgetOptions[widgetOptionsName];
    return cy
      .visit('testing/cypress/e2e/data-grid/container.html')
      .createWidget(
        'dxDataGrid',
        options,
      );
  });

When('type in search panel {string}',
  (searchText: string) => {
    cy
      .clock()
      .get('.dx-datagrid-search-panel input')
      .type(searchText)
      .tick(1000);
  });

Then('check screenshot', () => {
  cy
    .get('#container')
    .screenshot();
});
