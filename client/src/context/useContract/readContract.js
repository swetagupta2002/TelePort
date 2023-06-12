const getAllMobileNo =async (contract , CSPName)=>{
    if(!contract ) return false;

    const res= await contract.methods.getAllMobileNo(CSPName).call();
    return await Promise.all(
        res.map(async (item)=>{

          const {tokenId,mobileNo,owner,user}=await contract.methods.getMobileNoDetails(item).call(); 
          return {tokenId,mobileNo,user,owner}; 
    }));

}

const getAllCSP =async (contract)=>{
    if(!contract) return false;
    
    const res= await contract.methods.getAllCSPIds().call();
    console.log(res);
    return await Promise.all(
        res.map(async (item)=>{
            
            const _cspName=await contract.methods.getCSPNameById(item).call();
            
            console.log(_cspName,item);
            const obj=await contract.methods.getCSPDetails(_cspName).call(); 
            return obj;
        })
    );
    
}


const getCSPByAddress =async (contract , address)=>{
    if(!contract ) return false;

    const res= await contract.methods.getCSPByAddress(address).call();
    console.log(res);
    const {CSPId,CSPName,CSPAddress}=await contract.methods.getCSPDetails(res).call(); 
    return {CSPId,CSPName,CSPAddress};
}

const getCSPByID =async (contract , _CSPId)=>{
    if(!contract) return false;

    const {CSPId,CSPName,CSPAddress}=await contract.methods.getCSPDetails(_CSPId).call();
    return {CSPId,CSPName,CSPAddress};
}

const getCSPIdFromName = async (contract , CSPName)=>{
    if(!contract ) return false;
    const res= await contract.methods.getCSPIdByName(CSPName).call();
    return await res;
}

const getCSPNameById = async (contract , CSPId)=>{
    if(!contract ) return false;
    const res= await contract.methods.getCSPNameById(CSPId).call();
    return res;
}

const getCSPIdByAddress = async (contract , address)=>{
    if(!contract) return false;
    const res= await contract.methods.getCSPIdByAddress(address).call();
    return res;
}

const getMobileNoDetails = async (contract, _mobileNo)=>{
    if(!contract) return false;
    const res = await contract.methods.getMobileNoDetails(_mobileNo).call();
    console.log("The Mobile no deatils of ",_mobileNo," is ",res);
    return res;

}

export {getAllMobileNo,
        getAllCSP,
        getCSPByAddress,
        getCSPByID,
        getCSPIdFromName,
        getCSPNameById,
        getCSPIdByAddress,
        getMobileNoDetails
    }