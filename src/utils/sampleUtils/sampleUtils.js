export const Add = (a,b) =>{
    if(typeof a === 'string' || typeof b === "string")
        return null;
    return a+b
}

export const AddItemsToList = (list,newItem) =>{
    list.push(newItem);
    return list
}

export const RemoveItemsToList = (list,index) =>{
    list.splice(index,1);
    return list
}

export const UpdateItemsToList = (list,index, newItem) =>{
    list[index] = newItem
    return list
}