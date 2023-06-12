// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTPort is ERC721URIStorage, Ownable {
    //using Counters for Counters.Counter;
    //Counters.Counter private _tokenIds;

    constructor() ERC721("NFTPort", "NFTP") {}

    struct CSP{
        uint id;
        string name;
        address owner;
        uint [] allMobileNo;
    }

    struct MobileNo{
        uint tokenId;
        uint mobileNo;
        address owner;
        address user;
    }
    uint[] public allCSPIds;
    mapping(uint=>string) public CSPId_Name; //CSP_ID to CSP_Name
    mapping(uint256 => CSP) public allCSP; // CSP_ID to CSP
    mapping(address=>CSP) public addressToCSP;
    mapping(uint256=> uint []) public allMobileNo; // CSP_ID to MobileNo
    mapping(uint=> MobileNo) public allMobileNoDetails; // MobileNo to MobileNoDetails
    mapping(string => uint) public allCSPName; // CSP_NAME to CSP_ID
    mapping(uint=>mapping(uint=>string)) public tokenURIList;
    mapping(address=>uint) public addressToCSPId;//CSP_Address to CSP_ID
    //mapping(uint=>mapping(uint=>string)) public tokenURIList;
    
    //create new CSP
    function createCSP(string memory _name, uint id) public  {
        CSP storage newCSP = allCSP[id]; 
        newCSP.id = id;
        newCSP.name = _name;
        newCSP.owner = msg.sender;
        //newCSP.allMobileNo = new uint[](0);
        allCSPIds.push(id);
        CSPId_Name[id]=_name;
        allCSPName[_name] = id;
        addressToCSPId[msg.sender] = id;
        addressToCSP[msg.sender] = allCSP[id];
    }
    //Register new MobileNo
    //Calling function should be the owner of the CSP
    //Create a mobile Object attributes 1. mobile no 2. owner 3. tokenId
    //Add the mobile no to the CSP[owner]
    //Add the mobile no to the allMobileNoDetails
    
    function registerMobileNo(string  memory _cspName, uint _mobileNo, string memory _tokenURI, address user) public returns(uint256){
        uint256 _cspId= allCSPName[_cspName];
        address _cspAddress= allCSP[_cspId].owner;
        //require(allCSP[_cspId].owner == msg.sender, "You are not the owner of this CSP");
        
        uint tokenId = _cspId*1000+_mobileNo*100;
        allMobileNo[_cspId].push(_mobileNo);
        MobileNo storage newMobileNo = allMobileNoDetails[_mobileNo];
        newMobileNo.tokenId = tokenId;
        newMobileNo.mobileNo = _mobileNo;
        newMobileNo.owner = _cspAddress;
        newMobileNo.user = user;
        allMobileNoDetails[_mobileNo] = newMobileNo;
        tokenURIList[_cspId][tokenId] = _tokenURI;
        _mint(_cspAddress,tokenId);
        _setTokenURI(tokenId, _tokenURI);
        return tokenId;
    }

    //Transfer MobileNo
    //Change the address of the owner of the mobile no
    //Remove the number from the old CSP and add it to the new CSP


    function transferMobileNo(string memory _cspName, uint _mobileNo, string memory  _newOwner) public {
        uint256 _cspId= allCSPName[_cspName];
        uint256 _newCspId= allCSPName[_newOwner];
        require(allMobileNoDetails[_mobileNo].user == msg.sender, "You are not the owner of this CSP");
        //require(allCSP[_newCspId].owner != msg.sender, "You are the owner of this CSP");
        uint tokenId = allMobileNoDetails[_mobileNo].tokenId;
        allMobileNo[_newCspId].push(_mobileNo);
        allMobileNoDetails[_mobileNo].owner = allCSP[_newCspId].owner;
        for(uint i=0;i<allMobileNo[_cspId].length;i++){
            if(allMobileNo[_cspId][i] == _mobileNo){
                delete allMobileNo[_cspId][i];
            }
        }
        address oldCSP= allCSP[_cspId].owner;
        address newCSP= allCSP[_newCspId].owner;
        _transfer(oldCSP, newCSP, tokenId);

    }
    
    //Get all the CSP ids
    function getAllCSPIds() public view returns(uint[] memory){
        return allCSPIds;
    }
    
    //Get all the mobile no of a CSP
    function getAllMobileNo(string memory _cspName) public view returns(uint[] memory){
        uint256 _cspId= allCSPName[_cspName];
        return allMobileNo[_cspId];
    }

    //Get the details of a mobile no
    function getMobileNoDetails(uint _mobileNo) public view returns(MobileNo memory){
        return allMobileNoDetails[_mobileNo];
    }

    //Get the details of a CSP
    function getCSPDetails(string memory _cspName) public view returns(CSP memory){
        uint256 _cspId= allCSPName[_cspName];
        return allCSP[_cspId];
    }

    //Get the CSP of an address
    function getCSPByAddress(address _address) public view returns(CSP memory){
        return addressToCSP[_address];
    }
    function getCSPNameById(uint CSP_Id) public view returns(string memory) {
        return CSPId_Name[CSP_Id];
    }
    function getCSPIdByName(string memory _cspName) public view returns(uint) {
        return allCSPName[_cspName];
    }
    function getCSPIdByAddress(address _address) public view returns(uint) {
        return addressToCSPId[_address];
    }
    function getTokenURI(uint _cspId, uint tokenId) public view returns(string memory){
        return tokenURIList[_cspId][tokenId];
    }
}

