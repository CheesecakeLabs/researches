pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";


contract Poketoken is ERC721, ERC721URIStorage, ERC721Enumerable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct ForSale {
        address payable owner;
        uint128 price;
    }

    mapping(uint256 => ForSale) private _forSale;


    constructor() ERC721("Poketoken", "P") {}

    function _setForSale(address payable from, uint128 price, uint256 tokenId) internal {
        _forSale[tokenId] = ForSale(from, price);
    }

    function _removeFromSale(uint256 tokenId) internal {
        delete _forSale[tokenId];
    }

    function addForSale(uint128 price, uint256 tokenId) external payable {
        require(msg.value == 0.02 ether);
        require(msg.sender == ERC721.ownerOf(tokenId));
        _setForSale(payable(msg.sender), price, tokenId);
    }

    function buyFromSale(uint256 tokenId) external payable {
        ForSale memory token = _forSale[tokenId];
        uint256 value = token.price;
        require(msg.value == value);
        token.owner.transfer(value);
        _transfer(token.owner, msg.sender, tokenId);
        _removeFromSale(tokenId);
    }

    function cancelSale(uint256 tokenId) public {
        ForSale memory forSale = _forSale[tokenId];
        require(forSale.owner == msg.sender);
        _removeFromSale(tokenId);
    }


    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }


    function tokensOfOwner(address owner) public view returns (uint256[] memory) {
        uint256 pokemonCount = balanceOf(msg.sender);
        if (pokemonCount == 0) {
            return new uint256[](0);
        } else {
            uint256[] memory ret = new uint256[](pokemonCount);
            for (uint i = 0; i < pokemonCount; i++) {
                ret[i] = tokenOfOwnerByIndex(owner, i);
            }
            return ret;
        }
    }


    function buyPokemon(string memory metadataURI) external payable returns (uint256) 
    {
        require(msg.value == 0.02 ether);
        return mintPokemon(msg.sender, metadataURI);
    }

    function mintPokemon(address owner, string memory metadataURI)
    public
    returns (uint256)
    {
        uint256 id = _tokenIds.current();
        _mint(owner, id);
        _setTokenURI(id, metadataURI);
        _tokenIds.increment();
        return id;
    }
}