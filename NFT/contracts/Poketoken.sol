// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

/// Implement the ERC-721 protocol
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
/// Add the capability to set and read URIs for each token
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
/// Keep track of the addresses' tokens
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
/// Counter used to keep track of the ids
import "@openzeppelin/contracts/utils/Counters.sol";
/// Add the capability to create functions that can only be called by the contract owner
import "@openzeppelin/contracts/access/Ownable.sol";

/// The Poketoken smart contract
contract Poketoken is ERC721, ERC721URIStorage, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    mapping(uint256 => ForSale) private _forSale;

    uint256[] private _allForSale;

    /// Struct that represent a token that is open for sale
    struct ForSale {
        address payable owner;
        uint128 price;
    }

    /// Poketoken constructor
    constructor() ERC721("Poketoken", "P") {}

    // ---- Functions derived from multiple classes that had to be overriden  ----

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
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

    // ---- Poketoken marketplace logic ----

    /**
        Check if a token is open for sale
        Args:
            tokenId: id of the token that which will be searched in the open for sale list
        Returns: True if the tokenId belongs to a token that is open for sale
    */
    function _isForSale(uint256 tokenId) private view returns (bool) {
        for (uint256 i = 0; i < _allForSale.length; i++) {
            if (_allForSale[i] == tokenId) {
                return true;
            }
        }
        return false;
    }

    /**
        Set a token open for sale
        Args:
            from: address of the token owner
            price: price of the token
            tokenId: id of the token
    */
    function _setForSale(
        address payable from,
        uint128 price,
        uint256 tokenId
    ) internal {
        _forSale[tokenId] = ForSale(from, price);
        _allForSale.push(tokenId);
    }

    /**
        Remove a token from sale list, by its index
        Args:
            index: index that will be removed from the open for sale list
    */
    function _removeFromSaleListByIndex(uint256 index) private {
        uint256 lastTokenIndex = _allForSale.length - 1;
        uint256 lastTokenId = _allForSale[lastTokenIndex];
        _allForSale[index] = lastTokenId;
        _allForSale.pop();
    }

    /**
        Remove a token from sale
        Args:
            tokenId: id of the token that will be removed from sale
    */
    function _removeFromSale(uint256 tokenId) internal {
        delete _forSale[tokenId];
        for (uint256 i = 0; i < _allForSale.length; i++) {
            if (_allForSale[i] == tokenId) {
                _removeFromSaleListByIndex(i);
                break;
            }
        }
    }

    /**
        Get the token's for sale data
        Args:
            tokenId: The id of the token that will be used for sale 
        Returns: The token's for sale data
    */
    function getForSale(uint256 tokenId)
        external
        view
        returns (ForSale memory)
    {
        return _forSale[tokenId];
    }

    /**
        Add a token for sale
        Requires:
            Transaction value to be 0.02 ether
            Transaction sender to be the token owner
            Open for sale token
        Args:
            price: The cost the token will have
            tokenId: the id of the token
    */
    function addForSale(uint128 price, uint256 tokenId) external payable {
        require(msg.value == 0.02 ether);
        require(msg.sender == ERC721.ownerOf(tokenId));
        require(!_isForSale(tokenId));
        _setForSale(payable(msg.sender), price, tokenId);
    }

    /**
        List the tokens that are open for sale
        Returns: List of the  tokens that are open for sale
    */
    function listFromSale() public view returns (uint256[] memory) {
        return _allForSale;
    }

    /**
        Buy a token that is open for sale
        Requires:
            Transaction value to be equal to the token price
        Args:
            tokenId: the id of the token that is being bought
    */
    function buyFromSale(uint256 tokenId) external payable {
        ForSale memory token = _forSale[tokenId];
        uint256 value = token.price;
        require(msg.value == value);
        token.owner.transfer(value);
        _transfer(token.owner, msg.sender, tokenId);
        _removeFromSale(tokenId);
    }

    /**
        Remove a token from sale
        Requires:
            token owner to be the transaction sender
        Args:
            tokenId: the id of the token that is being removed from sale
    */
    function cancelSale(uint256 tokenId) public {
        ForSale memory forSale = _forSale[tokenId];
        require(forSale.owner == msg.sender);
        _removeFromSale(tokenId);
    }

    /**
        List the tokens of an address
        Args:
            owner: the address which will have its tokens fetched and listed
        Returns: list of tokens
    */
    function tokensOfOwner(address owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 pokemonCount = balanceOf(msg.sender);
        if (pokemonCount == 0) {
            return new uint256[](0);
        } else {
            uint256[] memory ret = new uint256[](pokemonCount);
            for (uint256 i = 0; i < pokemonCount; i++) {
                ret[i] = tokenOfOwnerByIndex(owner, i);
            }
            return ret;
        }
    }

    /**
        Create a token
        Args:
            owner: the address which will have its tokens fetched and listed
        Requires:
            Transaction value to be 0.02
        Returns: list of tokens
    */
    function createPokemon() external payable returns (uint256) {
        require(msg.value == 0.02 ether);
        return mintPokemon(msg.sender);
    }

    /**
        Set the metadata URI
        Requires:
            Token have no metadata set yet
        Args:
            tokenId: The ID of the token which will have the URI set
            metadataURI: the URI of the metadata
    */
    function setPokemonURI(uint256 tokenId, string memory metadataURI)
        public
        onlyOwner
    {
        require(
            keccak256(bytes(tokenURI(tokenId))) == keccak256(bytes("none"))
        );
        _setTokenURI(tokenId, metadataURI);
    }

    /**
        Mint a new token with an empty URI for an address 
        Args:
            owner: The address for which the token will be minted to
        returns: the minted token's id
    */
    function mintPokemon(address owner) private returns (uint256) {
        uint256 id = _tokenIds.current();
        _mint(owner, id);
        _setTokenURI(id, "none");
        _tokenIds.increment();
        return id;
    }
}
