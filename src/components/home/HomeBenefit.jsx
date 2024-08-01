
import React from 'react';
import '../../styles/HomeBenefit.css';
import TitleSection from '../TitleSection';
import BenefitsSection from '../BenefitsSection';



const benefitsData = [
    {
      icon: '/Group.svg', // Replace with actual icon path
      title: 'Saves Time and Energy',
      description: 'By using a wedding planner, you no longer have to worry about every detail of your wedding.'
    },
    {
      icon: '/Group.svg',
      title: 'Budget Management',
      description: 'A wedding planner can help you manage your wedding budget and provide advice on how to save money.'
    },
    {
      icon: '/Group.svg',
      title: 'Efficient Coordination',
      description: 'A wedding planner can help coordinate all the vendors involved in your wedding, from catering to photographers.'
    },
    {
      icon: '/Group.svg',
      title: 'Handling Unexpected Situations',
      description: 'By using a wedding planner, you can feel at ease and confident that every detail of your wedding is being taken care of.'
    }
    
   
  ];
function HomeBenefit() {
  return (
    
        <div className="benefits-area">
            <div className="container">
                <div className="benefits-title">
                <TitleSection 
                 subtitle="BENEFIT" 
                 mainTitle="Perfect moments simply reveal themselves"
                 vectorLeft="/Vector 3.svg" 
                 vectorRight="/Vector 1.svg" 
                />
                </div>
                <div className="benefit-cards">
                <BenefitsSection benefits={benefitsData} />
                </div>
            </div>
        </div>
      
  )
}

export default HomeBenefit