module.exports = {
     XPATH_BODY: "//body",
     XPATH_MAIN_TABLE: "//div[@id='mainTable_ID']",
     XPATH_MAIN_TABLE_HEADER: "//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-thead']",
     XPATH_MAIN_TABLE_BODY: "//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']",
     XPATH_MAIN_TABLE_ADD_NEW_ROW: "(//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'])[2]//i[@class='fa fa-plus']",
     XPATH_MAIN_TABLE_ADD_NEW_ROW_BTN: "(//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'])[2]//i[@class='fa fa-plus']/parent::button",
     XPATH_MAIN_TABLE_REMOVE_ROW_BTN: "(//div[@id='mainTable_ID']//i[@class='fa fa-minus'])[1]/parent::button",
     XPATH_MAIN_TABLE_NEW_ADDED_ROW: "(//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'])[3]",
     XPATH_MAIN_TABLE_NEW_ROW_RADIO_BTN: "(//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'])[3]//div[@class='kuc-input-radio']//label[contains(text(), 'Elephant')]",
     XPATH_MAIN_TABLE_NEW_ROW_BUTTON: "(//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'])[3]//button[@class='kuc-btn normal']",
     XPATH_MAIN_TABLE_NEW_ROW_TEXT: "(//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'])[3]//div[@class='kuc-input-outer']//input",
     XPATH_MAIN_TABLE_NEW_ROW_DROPDOWN: "(//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'])[3]//div[@class='kuc-dropdown-selected']",
     XPATH_MAIN_TABLE_NEW_ROW_DROPDOWN_ITEM_TO_SELECT: "(//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'])[3]//span[@class='kuc-list-item-label'][contains(text(),'Dropdown Item_2')]",
     XPATH_MAIN_TABLE_NEW_ROW_CHECKBOX: "(//div[@id='mainTable_ID']//div[@class='kuc-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'])[3]//div[@class='kuc-input-checkbox']//label[contains(text(),'Checkbox Item_2')]",
     XPATH_SECOND_TABLE: "//div[@id='secondTable_ID']",
     XPATH_GET_VALUE_OF_TABLE_BTN: "//button[contains(text(),'Get Value Of Table Button')]",
     XPATH_GET_STATE_OF_TABLE_BTN: "//button[contains(text(),'Get State Of Table Button')]",
     XPATH_GET_VALUE_OF_SET_VALUE_BTN: "//button[contains(text(),'Get Value Of Set Value Table Button')]",
     XPATH_SECOND_TABLE_CELL_CHANGE: "//div[@id='secondTable_ID']//label[contains(text(), 'second Elephant')]",
     XPATH_SECOND_TABLE_CELL_CLICK: "//div[@id='secondTable_ID']//button[contains(text(),'second Button')]",
     XPATH_SECOND_TABLE_ROW_ADD: "(//div[@id='secondTable_ID']//i[@class='fa fa-plus'])[1]",
     XPATH_SECOND_TABLE_ROW_REMOVE: "(//div[@id='secondTable_ID']//i[@class='fa fa-minus'])[1]",
};