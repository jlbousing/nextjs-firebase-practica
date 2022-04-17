
export const validateAccess = (authUser) => {
    
    if(!authUser){
        return false;
    }

    return true;

}