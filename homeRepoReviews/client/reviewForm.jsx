import React from 'react'

const ReviewForm = (props) => {
    console.log(props)

    return (
       <div>
           <h1>Write a review!</h1>
            <form>
              <h3>
                  Name:  
                  <input type='text' name='name' />
              </h3>
              <h3>
                  Date: 
                  <input type='text' date='date' />
              </h3>
              <h3>
                  Stars: 
                  <input type='number' name='stars' />
              </h3>
              <h3>
                  Review Title: 
                  <input type='text' name='title' />
              </h3>
              <h3>
                  Review: 
              <textarea rows='8' cols='50' />
            </h3>
                  
             

        </form>
       </div>
        
        )
}


export default ReviewForm;