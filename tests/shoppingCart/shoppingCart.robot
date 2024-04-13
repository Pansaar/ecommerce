*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
View Product in Shopping Cart
    [Documentation]    Vew Product in Shopping Cart Success
    Open Browser    http://localhost:3000/shoppingCart?user=pansaar1553    Chrome
    Wait Until Element Is Visible    id=prodContainer0    timeout=10s
    Click Element    id=prodContainer0
    sleep    10 seconds
    Location Should Be    http://localhost:3000/productView?user=pansaar1553&productId=6609915e44df170a9ef7f449


