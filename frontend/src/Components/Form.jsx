import React from 'react'

function Form() {
    return (
        <>
            <form action="">
                <div className='d-flex'>
                    <input type="text" placeholder='Name' className='form-control flex-grow-1  me-3 mb-3' />
                    <input type="email" placeholder='Email' className='form-control flex-grow-1 mb-3' />
                </div>
                <div className='d-flex'>
                    <input type="number" placeholder='Phone (Optional)' className='form-control flex-grow-1 me-3' />
                    <input type="text" placeholder='Subject' className='form-control flex-grow-1' />
                </div>
                <div>
                    <textarea name="text-area" id="" cols="30" rows="10" placeholder='Enter your message here' className='form-control mt-3'></textarea>
                </div>
                <button>Submit</button>

            </form>
        </>
    )
}

export default Form