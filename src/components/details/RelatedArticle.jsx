import React from 'react'
import TitleSection from '../TitleSection'
import "../../styles/RelatedArticle.css"

function RelatedArticle() {
  return (
    <div className="articles">
        <div className="container">
            <div className="title">
            <TitleSection 
            mainTitle='Related Article'
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
               
            </div>
          
        </div>
    </div>
  )
}

export default RelatedArticle