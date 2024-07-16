import React from 'react'

function test1({test}) {
  return <>
   <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src={test.pics}  alt="..." />
                            <h5>{test.title}</h5>
                            <p class="font-weight-light mb-0">"{test.content}"</p>
                        </div>
                        </div>
  </>
}

export default test1
