*** Settings ***
Library    RequestsLibrary
Library    Collections
Library    String
Library    OperatingSystem

*** Variables ***
${BASE_URL}    http://localhost:3000/api/fetchProductViewAmount

*** Test Cases ***
Test Fetch Product Amount Successfully
    [Documentation]    Test fetching product amount successfully when user exists
    Create Session    productViewSession    ${BASE_URL}
    ${response}=    GET On Session    productViewSession    /    params=user=pansaar1553    params=productId=660ac95acfae37dc1491318a
    Should Be Equal As Strings    ${response.status_code}    200
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    Product updated successfully
    Should Contain    ${response_body}    prodAmount
    

Test Fetch Product Amount User Not Found
    [Documentation]    Test fetching product amount when user is not found
    Create Session    productViewSession    ${BASE_URL}
    ${params}    Evaluate    {"user": "nonexistentuser", "productId": "660ac95acfae37dc1491318a"}
    ${response}=    Get Request    productViewSession    /    params=${params}
    Should Be Equal As Strings    ${response.status_code}    404
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    User not found

Test Fetch Product Amount Product Not Found
    [Documentation]    Test fetching product amount when product is not found
    Create Session    productViewSession    ${BASE_URL}
    ${response}=    Get Request    productViewSession    /    params=user=pansaar1553    params=productId=660ac95acfae37dc1491318b
    Should Be Equal As Strings    ${response.status_code}    404
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    Product not found

Test Fetch Product Amount User and Product Not Found
    [Documentation]    Test fetching product amount when user and product are not found
    Create Session    productViewSession    ${BASE_URL}
    ${params}=    Evaluate    {"user": "nonexistentuser", "productId": "660ac95acfae37dc1491318b"}
    ${response}=    Get Request    productViewSession    /    params=${params}
    Should Be Equal As Strings    ${response.status_code}    404
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    User not found



    



