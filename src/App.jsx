import React from 'react'
import Card1 from './container/card1'
import Test1 from './container/test1'
import Nav from './navigator/nav'
import Header from './header/header'
import image from './assets/img/testimonials-1.jpg'
import image1 from './assets/img/testimonials-2.jpg'
import image2 from './assets/img/testimonials-3.jpg'
import image3 from './assets/img/bg-showcase-1.jpg'
import image4 from './assets/img/bg-showcase-2.jpg'
import image5 from './assets/img/bg-showcase-3.jpg'
import master from './assets/img/bg-masthead.jpg'
function App() {

    let data = [
        {
            responsive:"Fully Responsive",
            content:"This theme will look great on any device, no matter the size!",
            pic:"bi-window m-auto text-primary",
        },
        {
            responsive:"Bootstrap 5 Ready",
            content:"Featuring the latest build of the new Bootstrap 5 framework!",
            pic:"bi-layers m-auto text-primary",
        },
        {
            responsive:"Easy to Use",
            content:"Ready to use with your own content, or customize the source files!",
            pic:"bi-terminal m-auto text-primary",
        },
    ]

     let test = [
        {
              title:"Margaret E.",
              content:"This is fantastic! Thanks so much guys!",
              pics:image,
        },
        {
            title:"Fred S.",
            content:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
            pics:image1,
      },
      {
        title:"Sarah W.",
        content:"Thanks so much for making these free resources available to us!",
        pics:image2,
  }
     ]

    
  return <>
    <nav class="navbar navbar-light bg-light static-top">
     <Nav/>
    </nav>
    <header class="masthead">
        <Header/>
          </header>
        <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                   {
                    data.map((e,i)=>{
                        return<Card1 data={e} key={i}/>
                    })
                   }
                   </div>
                    </div>
                    </section>
                    <section class="showcase">
            <div class="container-fluid p-0">
                <div class="row g-0">
                <div class="col-lg-6 order-lg-2 text-white showcase-img" > 
                <img src={image3}/>
                </div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Fully Responsive Design</h2>
                        <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
                 <div class="row g-0">
                    <div class="col-lg-6 text-white showcase-img" ><img src={image4} width={672}height={500}/>
                    </div>
                    <div class="col-lg-6 my-auto showcase-text">
                        <h2>Updated For Bootstrap 5</h2>
                        <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div> 
                <div class="row g-0">
                    <div class="col-lg-6 order-lg-2 text-white showcase-img">
                        <img src={image5}/>
                    </div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Easy to Use & Customize</h2>
                        <p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div> 
                </div>
            </section>

        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                         {
                            test.map((e,i) =>{
                                return<Test1 test={e} key={i}/>
                            })
                         }
                    </div>
                    </div>
        </section>
        
         
        <section className="call-to-action text-white text-center" id="signup">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                        
                        <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                           
                            <div className="row">
                                <div className="col">
                                    <input class="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                    <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                                </div>
                                <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                            </div>
                           
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    <p>To activate this form, sign up at</p>
                                    <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!">About</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contact</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-facebook fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-twitter fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i className="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        

  </>
}
export default App
