pragma solidity ^0.4.25;

contract TestToken {
    string public name = "Test Token";
    string public symbol = "TTK";
    uint8 public decimals = 6;
    uint256 public totalSupply = 1000000 * 10**6;
    mapping(address => uint256) public balanceOf;

    function TestToken() public {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 value) public returns (bool) {
        require(to != address(0));
        require(balanceOf[msg.sender] >= value);

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        return true;
    }
}
