/// <reference types="cypress" />

export type WidgetName =
  'dxAccordion' |
  'dxAutocomplete' |
  'dxGallery' |
  'dxButtonGroup' |
  'dxCalendar' |
  'dxCheckBox' |
  'dxColorBox' |
  'dxDropDownButton' |
  'dxDraggable' |
  'dxTabPanel' |
  'dxForm' |
  'dxFilterBuilder' |
  'dxSelectBox' |
  'dxScrollable' |
  'dxScrollView' |
  'dxMultiView' |
  'dxPivotGrid' |
  'dxPivotGridFieldChooser' |
  'dxDataGrid' |
  'dxTreeList' |
  'dxPager' |
  'dxRadioGroup' |
  'dxScheduler' |
  'dxTabs' |
  'dxTagBox' |
  'dxContextMenu' |
  'dxDropDownMenu' |
  'dxChart' |
  'dxMenu' |
  'dxPopup' |
  'dxPopover' |
  'dxSortable' |
  'dxButton' |
  'dxTextBox' |
  'dxTextArea' |
  'dxToolbar' |
  'dxTreeView' |
  'dxDateBox' |
  'dxLookup' |
  'dxList' |
  'dxHtmlEditor' |
  'dxNumberBox' |
  'dxValidator' |
  'dxFileUploader' |
  'dxDropDownBox';

const DEFAULT_DOM_CONTAINER_SELECTOR = '#container';

export const createWidgetCommand = (
  widget: WidgetName,
  widgetOptions: Record<PropertyKey, unknown>,
  domSelector = DEFAULT_DOM_CONTAINER_SELECTOR,
): Cypress.Chainable => cy.window().then((win) => {
  win.eval(`$('${domSelector}').${widget}(${JSON.stringify(widgetOptions)})`);
});
