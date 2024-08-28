import React from 'react'
import '../../styles/Blog.css'
import TitleSection from '../TitleSection'
import Button from '../Button'
function Article() {
  return (
    <div className="article">
        <div className="container">
            <div className="title">
            <TitleSection 
            mainTitle='Featured Article'
            subtitle="blog" 
            vectorLeft="/Vector 3.svg" 
            vectorRight="/Vector 1.svg" 
          />
            </div>
            <div className="content">
                <div className="features-top">
                    <div className="feature">
                        <div className="feature-card">
                             <div className="f-img">
                                <img src="/a8.png" alt="" />
                             </div>
                             <div className="feature-content">
                                <p>March 14, 2023</p>
                                <h3>How Our Wedding Planners Bring Your Vision to Life</h3>
                                <a href="/blog-details">Learn More </a>
                             </div>
                        </div>
                    </div>
                    
                    <div className="feature">
                        <div className="feature-card">
                             <div className="f-img">
                                <img src="/a2.svg" alt="" />
                             </div>
                             <div className="feature-content">
                                <p>March 14, 2023</p>
                                <h3>How Our Wedding Planners Bring Your Vision to Life</h3>
                                <a href="/blog-details">Learn More </a>
                             </div>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-card">
                             <div className="f-img">
                                <img src="/a3.svg" alt="" />
                             </div>
                             <div className="feature-content">
                                <p>March 14, 2023</p>
                                <h3>How Our Wedding Planners Bring Your Vision to Life</h3>
                                <a href="/blog-details">Learn More </a>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="features-top">
                <div className="feature-special">
                        <div className="feature-card-special">
                             <div className="f-img">
                                <img src="/a4.jpg" alt="" />
                             </div>
                             <div className="feature-content">
                                <p>March 14, 2023</p>
                                <h3>How Our Wedding Planners Bring Your Vision to Life</h3>
                                <a href="/blog-details">Learn More  </a>
                             </div>
                        </div>
                    </div>
                    
                    <div className="feature">
                        <div className="feature-card">
                             <div className="f-img">
                                <img src="/a5.png" alt="" />
                             </div>
                             <div className="feature-content">
                                <p>March 14, 2023</p>
                                <h3>How Our Wedding Planners Bring Your Vision to Life</h3>
                                <a href="/blog-details">Learn More </a>
                             </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="btn">
              <Button text="Load More" href="/blog-details" />
           </div>
        </div>
    </div>
  )
}

export default Article