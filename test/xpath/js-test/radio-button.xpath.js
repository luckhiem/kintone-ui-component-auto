module.exports = {
     XPATH_BODY: "//body",
     XPATH_UI: "//span[@class='kuc-input-radio-item' and ./label/text()='Orange' and ./input/@name='UI_radioBtn']",
     XPATH_CONSTRUCTOR: "//*[@id='constructorWithoutValueOption_radioBtnEl']//input",
     XPATH_FULL_CONSTRUCTOR: "(//*[@id='radioBtnFullConstructorEl']//input)[1]",
     XPATH_ADD_ITEM: "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Dell')]",
     XPATH_ADD_LAST_ITEM: "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Dell - last')]",
     XPATH_REMOVE_ITEM: "//span[@class='kuc-input-radio-item']//label[contains(text(), 'PC')]",
     XPATH_GET_ITEM: "//button[contains(text(), 'Get Items of Full Radio Button')]",
     XPATH_GET_ITEM_INVISIBLE: "//button[contains(text(), 'Get Items of Invisible')]",
     XPATH_GET_VALUE: "//button[contains(text(), 'Get Value Radio Button')]",
     XPATH_GET_VALUE_INVISIBLE: "//button[contains(text(), 'Get Value of Invisible')]",
     XPATH_GET_VALUE_SET_VALUE: "//button[contains(text(), 'Get Value of setValue')]",
     XPATH_DISABLE_ENABLE_ITEM: "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Coca Cola')]",
     XPATH_AFTER_DISABLED_ENABLE_ITEM: "//span[@class='kuc-input-radio-item' and ./label/text()='Coca Cola' and ./input/@disabled]",
     XPATH_DISABLE_DISABLE_ITEM: "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Aquafina')]",
     XPATH_AFTER_DISABLED_DISABLE_ITEM: "//span[@class='kuc-input-radio-item' and ./label/text()='Aquafina' and ./input/@disabled]",
     XPATH_DISABLE_ENABLE_INVISIBLE_ITEM: "//button[contains(text(), 'Get Value of Disabled Invisible')]",
     XPATH_ENABLE_ENABLE_ITEM: "//span[@class='kuc-input-radio-item']//label[contains(text(), 'iDesk')]",
     XPATH_AFTER_ENABLED_ENABLE_ITEM: "//span[@class='kuc-input-radio-item' and ./label/text()='iDesk' and ./input/@disabled]",
     XPATH_ENABLE_DISABLE_ITEM: "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Table')]",
     XPATH_AFTER_ENABLED_DISABLE_ITEM: "//span[@class='kuc-input-radio-item' and ./label/text()='Table' and ./input/@disabled]",
     XPATH_RENDER: "//input[@name='render_radioBtn']/ancestor::span",
     XPATH_SHOW: "//label[contains(text(), 'First_Show')]",
     XPATH_HIDE: "//label[contains(text(), 'First_Hide')]",
     XPATH_DISABLE: "//span[@class='kuc-input-radio-item' and ./input/@disabled]/label[contains(text(), 'First_Disable')]",
     XPATH_ENABLE: "//span[@class='kuc-input-radio-item' and ./input/@disabled]/label[contains(text(), 'First_Enable')]",
     XPATH_ENABLED: "//span[@class='kuc-input-radio-item']/label[contains(text(), 'First_Enable')]",
     XPATH_ON_FUNC: "//label[contains(text(), 'Main')]",
     XPATH_ON_TRIGGER: "//label[contains(text(), 'First_OnTrigger')]",
};