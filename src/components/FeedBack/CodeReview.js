import React from 'react'
import "./CodeReview.css";
const CodeReview = () => {

    const handleUpvote = () => {
         
    }
    const handleDownvote = () => {
            
    }   

  return (
    <div className="code-review-container" >
        <div className='flex-container'>
            <div className='card '>
                <h1>Code Review</h1>
                <div className='review-flex'>
                    <button onClick={handleUpvote}>
                         Upvote
                    </button>
                    <button onClick={handleDownvote}>
                        Downvote
                    </button>

                </div>
                <p>
                    Upvote:{0}
                </p>
                <p>
                    Downvote:{0}
                </p>
            </div>
            
            <div>
                 
            </div>
        </div>
    </div>
  )
}

export default CodeReview
