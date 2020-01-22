pragma solidity >=0.4.22 <0.7.0;
contract Inbox{
    string public message;
    constructor(string memory initialMessage) public {
        message = initialMessage;
    }
    function publishArticle(string memory newMessage) public {
        message = newMessage;
    }
}
