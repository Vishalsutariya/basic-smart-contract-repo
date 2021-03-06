// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.20 <0.9.0;

// contract code will go here
contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
