## Explanation

- **Real-time Search**: The list filters dynamically on every keystroke.  
- **Simple Implementation**: The `includes()` method and `keyup` event make the solution straightforward.  
- **Case Insensitivity**: The `.toLowerCase()` ensures that the search is not case-sensitive.  
- **keyup Event**: Used on the input box (`searchBox`) to trigger filtering every time the user releases a key.  
- **includes() Method**: Checks if the query (search text) is a substring of each list item's text content.  
