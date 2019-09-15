export const postForm = {
    title:'Post',
    fieldDetails : [{
        name : 'title',
        id:'post-title',
        label : 'Title',
        type:"text",
        margin:'normal',
        variant:'outlined',
        required : true,
        validators:['required'],
        errorMessages:['Please enter title']
        },
        {
        name : 'body',
        label:"Body",
        id:'post-completed',
        type:"text",
        margin:"normal",
        variant:"outlined",
        required : true,
        validators:['required'],
        errorMessages: ['Please enter body']
        }]   
}