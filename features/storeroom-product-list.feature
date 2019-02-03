Feature: Storeroom's product list
  As a user
  I want to see products from my storeroom
  So I can see the products that I have saved

  Scenario: Heading
    Given I am a storeroom user
    When I open the "list" page
    Then I can see the title "Storeroom" is showing

  Scenario: Product List
    Given I am a storeroom user
    When I open the "list" page
    Then I can see "3" products
    And there are
      | name                 |
      | Manzana              |
      | Lata de mejillones   |
      | Leche                |
