// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RealEstateToken {
    struct Property {
        string name;
        uint totalFractions;
        uint fractionsSold;
        uint pricePerFraction;
        address owner;
    }

    Property[] public properties;
    mapping(uint => mapping(address => uint)) public ownership;

    /// @notice Emitted when a new property is added
    event PropertyAdded(uint indexed propertyId, string name);

    /// @notice Emitted when a user buys fractions
    event FractionPurchased(uint indexed propertyId, address indexed buyer, uint quantity);

    function addProperty(
        string memory name,
        uint totalFractions,
        uint pricePerFraction
    ) public {
        uint id = properties.length;
        properties.push(Property(name, totalFractions, 0, pricePerFraction, msg.sender));
        emit PropertyAdded(id, name);
    }

    function buyFraction(uint propertyId, uint quantity) public payable {
        Property storage prop = properties[propertyId];
        require(prop.fractionsSold + quantity <= prop.totalFractions, "Not enough fractions left");
        require(msg.value >= quantity * prop.pricePerFraction, "Insufficient payment");

        ownership[propertyId][msg.sender] += quantity;
        prop.fractionsSold += quantity;

        emit FractionPurchased(propertyId, msg.sender, quantity);
    }

    function getPropertiesCount() public view returns (uint) {
        return properties.length;
    }

    function getProperty(uint id) public view returns (
        string memory,
        uint,
        uint,
        uint,
        address
    ) {
        Property memory p = properties[id];
        return (p.name, p.totalFractions, p.fractionsSold, p.pricePerFraction, p.owner);
    }

    function getMyFractions(uint propertyId) public view returns (uint) {
        return ownership[propertyId][msg.sender];
    }
}
