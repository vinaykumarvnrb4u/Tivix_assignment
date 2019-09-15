
// sort by key
// export const sort = (array,key)=>{
    
//     array.sort(function (a, b) {
//         return a[key].length - b[key].length;
//     });
//     return array;
// }

export const minmax = (array,key,status)=>{
    let value=array[0];
    if(status === "min")
    {
        for(let i=0;i<array.length;i++){
            if(array[i][key].length < value[key].length)
                {
                    value=array[i]
                    console.log("index : "+i+" value : "+value);
                    
                }
        }
    }
    else{
        for(let i=0;i<array.length;i++){
            if(array[i][key].length > value[key].length)
                value=array[i]
        }
    }
    
    return value;
}