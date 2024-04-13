*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
View Product in Shopping Cart
    [Documentation]    Vew Product in Shopping Cart Success
    Open Browser    http://localhost:3000/productView?user=pansaar1553&productId=6609915e44df170a9ef7f449    Chrome
    Wait Until Element Is Visible    id=editAmount
    Click Element    id=editAmount
    Sleep    3 seconds
    Click Element    id=purchase
    Sleep    3 seconds
    Page Should Contain    Scan to Purchase
    Sleep    3 seconds