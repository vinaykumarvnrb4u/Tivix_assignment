export const todoForm = {
    title:'Todo',
    fieldDetails : [{
        name : 'title',
        id:'todo-title',
        label : 'Title',
        type:"text",
        margin:'normal',
        variant:'outlined',
        required : true,
        validators:['required'],
        errorMessages:['Please enter title']
        },
        {
        name : 'completed',
        label:"Completed",
        id:'todo-completed',
        type:"checkbox",
        margin:"normal",
        variant:"outlined",
        required : true,
        validators:['required'],
        errorMessages: ['Please enter status']
        }]
}