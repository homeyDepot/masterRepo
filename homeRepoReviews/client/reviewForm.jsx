import React from 'react'

const ReviewForm = (props) => {
    
    return (
        <div>

        <form>
             <br>Name: </br>
             <br> <input type='text'></input></br>
             <br> Date: </br>
             <br> <input type='text'></input> </br>
             <br> Stars: </br>
             <br> <input type='number'></input> </br>
             <br> Review Title: </br>
             <br> <input type='text'></input> </br>
             <br> Review: </br>
             <br> <input type='text'></input> </br>

        </form>
        </div>
        )
}


export default ReviewForm;