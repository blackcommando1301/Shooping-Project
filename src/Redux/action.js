export const addCreator = (id) =>{
    return {
       type:"ADD_TO_CART",
       payload:id,
    };
}

export const removeCreater =(id)=>{
   return{
       type:"REMOVE_FROM_CART",
       payload:id,
   };
}


