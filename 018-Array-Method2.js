//delete
let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr ,"Length " +  arr.length)
delete arr[3]     //array length not change only element delete and shows(empty item)   >> altered orignal array
console.log(arr ,"Length " +  arr.length) 

//concat
let num = [23,45,67,78,78,94,35,56]
let New_Arry = num.concat(arr , ["Zahid","Ha" ,"Hi"])   //doesnot effect orignal arrays >> n numbers of arrays added
console.log(New_Arry);

//sort
let sort_Arry = [45,3,5,9,34,78,98,45,67,23,27]
sort_Arry.sort()    //>> sorting alphabetically   (2,28,2000,3,39,56,59) not increasing/decresing order
console.log(sort_Arry)   //it changes orignal array

//  ---> sort in assending     >> if you provide compare function to sort 
let compare_assend = (a,b)=>{
    return a-b;
}
sort_Arry.sort(compare_assend)
console.log(sort_Arry)
//  ---> sort in Dessending     >> if you provide compare function to sort 
let compare_decent = (a,b)=>{
    return b-a;
}
sort_Arry.sort(compare_decent)
console.log(sort_Arry)
        //more sorting methods we use by providing compare function of different type

//Reverse
let rev_Arr = [1,2,3,4]
console.log(rev_Arr)
rev_Arr.reverse()
console.log(rev_Arr)

//Splice( at_index , No.of_remove_element , ?elements to add ....)
let splice_arr = [1,2,3,4]
let deleted_value = splice_arr.splice( 2 , 1 , 1004 , 1007 ,1002)  //modify orignal
console.log(splice_arr)
console.log(deleted_value , typeof deleted_value)   // splice returns deleted values

//slice >> not change orignal  , returs sliced array
let slice_Arr = [2,4,6,8,10,12,14,16,18,20]
let new_sliced_Arr = slice_Arr.slice(3)    // returns array at index 3 to last
console.log(new_sliced_Arr)
let new_sliced_Arr2 = slice_Arr.slice(3 , 6)    // returns array at index 3 to 5 >> 6 not included
console.log(new_sliced_Arr2)