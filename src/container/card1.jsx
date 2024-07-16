import React from 'react'

function card1({data}) {
  return <>
   <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class={data.pic}></i></div>
                            <h3>{data.responsive}</h3>
                            <p class="lead mb-0">{data.content}</p>
                        </div>
                        </div>
  
  </>
}

export default card1
