const $ = require('../../util/ReturnElement').singleElement;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../util/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../util/common');
const expect = require('chai').expect;

// const CONSTRUCTOR_FIELDGROUP = "//div[@id='constructor-fieldgroup']//div[@class='kuc-fieldgroup']//ul[@class='kuc-fieldgroup-container']//li";
const COMPONENT_CONTENT_FIELDGROUP = "//div[@id='constructor-fieldgroup']//div[@class='kuc-fieldgroup']//div[@class='kuc-fieldgroup-container']//div[@class='kuc-fieldgroup-contents']//div[@id='component-container-fieldgroup']";
const TOGGLE_BUTTON_FIELDGROUP = "//div[@id='constructor-fieldgroup']/div[@class='kuc-fieldgroup']/div[@class='kuc-fieldgroup-container']/span";
const SET_CONTENT_FIELDGROUP = "//div[@id='set-content-fieldgroup']//div[@class='kuc-fieldgroup']//div[@class='kuc-fieldgroup-container']//div[@class='kuc-fieldgroup-contents']";
const SET_CONTENT_BUTTON_FIELDGROUP = "//div[@id='set-content-fieldgroup']//button[contains(text(), 'Set Content FieldGroup')]";
const GET_CONTENT_FIELDGROUP = "//div[@id='get-content-fieldgroup']//div[@class='kuc-fieldgroup']//div[@class='kuc-fieldgroup-container']//div[@class='kuc-fieldgroup-contents']";
const GET_CONTENT_CHECK_FIELDGROUP = "//div[@id='get-content-check-fieldgroup']";
const GET_CONTENT_BUTTON_FIELDGROUP = "//div[@id='get-content-fieldgroup']//button[contains(text(), 'Get Content FieldGroup')]";
const SET_NAME_FIELDGROUP = "//div[@id='set-name-fieldgroup']/div[@class='kuc-fieldgroup']/div[@class='kuc-fieldgroup-container']/span/span[2]";
const SET_NAME_BUTTON_FIELDGROUP = "//div[@id='set-name-fieldgroup']//button[contains(text(), 'Set Name FieldGroup')]";
const GET_NAME_BUTTON_FIELDGROUP = "//div[@id='get-name-fieldgroup']//button[contains(text(), 'Get Name FieldGroup')]";
const SET_TOGGLE_FIELDGROUP = "//div[@id='set-toggle-fieldgroup']/div[@class='kuc-fieldgroup']/div[@class='kuc-fieldgroup-container']/span";
const SET_TOGGLE_BUTTON_FIELDGROUP = "//div[@id='set-toggle-fieldgroup']//button[contains(text(), 'Set Toggle FieldGroup')]";
const GET_TOGGLE_BUTTON_FIELDGROUP = "//div[@id='get-toggle-fieldgroup']//button[contains(text(), 'Get Toggle FieldGroup')]";

describe('kintoneUIComponent - Text', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[FieldGroup-3] should Verify the operation of FieldGroup, all below components can be add to table as child component', function () {
        //check the toggle of fieldgroup
        let checkToggle = $(TOGGLE_BUTTON_FIELDGROUP).getAttribute('class');
        expect(checkToggle).to.include('collapse');
        let checkArrow = browser.getAttribute(TOGGLE_BUTTON_FIELDGROUP + "//span[1]",'class');
        expect(checkArrow).to.equal('kuc-arrow right')
        $(TOGGLE_BUTTON_FIELDGROUP).click();
        checkToggle = $(TOGGLE_BUTTON_FIELDGROUP).getAttribute('class');
        expect(checkToggle).to.include('expand');
        checkArrow = browser.getAttribute(TOGGLE_BUTTON_FIELDGROUP + "//span[1]",'class');
        expect(checkArrow).to.equal('kuc-arrow down');
        // check components in fieldgroup content (DOM)
        let checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-alert bg-success']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//button[@class='kuc-btn normal']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//button[@class='kuc-btn submit']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-input-checkbox']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='date-time-container']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-dropdown-container']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-fieldgroup']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//button[@class='kuc-icon-btn large  gray circle']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-label']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-multiple-list kuc-list-outer']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-input-radio']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-table']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//input[@class='kuc-input-text']").isExisting();
        expect(checkComponent).to.equal(true);
        checkComponent = $(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-textarea-outer']").isExisting();
        expect(checkComponent).to.equal(true);
    });

    it('[FieldGroup-17] should Verify that can set content of FieldGroup', function () {
        let checkComponent = browser.isExisting(SET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
        expect(checkComponent).to.equal(true);
        $(SET_CONTENT_BUTTON_FIELDGROUP).click();
        checkComponent = browser.isExisting(SET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
        expect(checkComponent).to.equal(false);
        checkComponent = $(SET_CONTENT_FIELDGROUP + "//input[@class='kuc-input-text']").isExisting();
        expect(checkComponent).to.equal(true);
    });

    it('[FieldGroup-18] should Verify that can get content of FieldGroup', function () {
        let checkComponent = browser.isExisting(GET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
        expect(checkComponent).to.equal(true);
        let checkDOMAfterGetContent = browser.isExisting(GET_CONTENT_CHECK_FIELDGROUP + "//div[@class='kuc-label']")
        expect(checkDOMAfterGetContent).to.equal(false); 
        $(GET_CONTENT_BUTTON_FIELDGROUP).click();
        checkDOMAfterGetContent = browser.isExisting(GET_CONTENT_CHECK_FIELDGROUP + "//div[@class='kuc-label']")
        expect(checkDOMAfterGetContent).to.equal(true); 
    });

    it('[FieldGroup-19] should Verify that can set name for FieldGroup', function () {
        let getName = $(SET_NAME_FIELDGROUP).getText();
        expect(getName).to.equal('Group');
        $(SET_NAME_BUTTON_FIELDGROUP).click();
        getName = $(SET_NAME_FIELDGROUP).getText();
        expect(getName).to.equal('Set Name Success');
    });

    it('[FieldGroup-20] should Verify that can get name for FieldGroup', function () {
        $(GET_NAME_BUTTON_FIELDGROUP).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('Group');
        browser.alertAccept();
    });

    it('[FieldGroup-21] should Verify that can set toggle for FieldGroup', function () {
        let checkToggle = $(SET_TOGGLE_FIELDGROUP).getAttribute('class');
        expect(checkToggle).to.include('expand');
        $(SET_TOGGLE_BUTTON_FIELDGROUP).click();
        checkToggle = $(SET_TOGGLE_FIELDGROUP).getAttribute('class');
        expect(checkToggle).to.include('collapse');
    });

    it('[FieldGroup-22] should Verify that can get toggle for FieldGroup', function () {
        $(GET_TOGGLE_BUTTON_FIELDGROUP).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('expand');
        browser.alertAccept();
    });
});