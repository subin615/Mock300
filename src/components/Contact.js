import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='text-center'>Have any Question?</h1>
          <hr />
          <div className='row'>
            <div className='col-md-6'>
              <img src='./assets/images/cimg.jpg' height="500px" width="600px" alt='contact us' />
            </div>
            <div className='col-md-6 mt-3'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact