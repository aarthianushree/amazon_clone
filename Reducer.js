export const initialState = {
    basket:[]
}

export function getbasketTotal(basket){
 
    return ( 
        basket?.reduce((amount,item)=> {
            return (item.price + amount)},
        0)  
    )
    
}



function reducer(state,action){
    console.log(action)

    switch(action.type){

        case "SET_USER":
            return{
                ...state,
                user: action.user
            }

        case "ADD_TO_BASKET":
            return {
              ...state,
              basket: [...state.basket, action.item]
            }
            
        case "REMOVE_FROM_BASKET":
            
         let newBasket = [...state.basket];
         
         const index = state.basket.findIndex( 
            (basketItem)=> basketItem.id === action.index 
        );

         if(index >= 0){
            newBasket.splice(index,1);
         }
         else{
            console.log('no')
         }

        return(
                {
                    ...state,
                    basket: newBasket
                }
            )
        default:
            return state
    } 
}

export default reducer