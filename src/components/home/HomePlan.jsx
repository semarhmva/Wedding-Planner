import React from 'react';
import '../../styles/HomePlan.css';
import TitleSection from '../TitleSection';
import PlanCard from '../PlanCard';

const planData = [
    {
      name: 'Local event',
      price: '$999.00',
      description: 'Wedding Planning Assistant Expands with Three New Localized Services',
      features: [
        '2    Exclusive Venue Hire in the City Centre of Glasgow',
        '50    Complimentary DJ for parties',
        'Personalised menus',
        'In house PA/microphones for speeches',
        'Dedicated Events Coordinator',
      ],
    },
    {
      name: 'Standard event',
      price: '$2,999.00',
      description: 'Wedding Planning Assistant update innovative seating chart builder',
      features: [
        '8    Exclusive Venue Hire in the City Centre of Glasgow',
        '100    Complimentary DJ for parties',
        'Personalised menus',
        'In house PA/microphones for speeches',
        'Dedicated Events Coordinator',
      ],
      featured: true, // Marks this plan as featured
    },
    {
      name: 'International event',
      price: '$9,999.00',
      description: 'Wedding Planning Assistant Launches International Event Planning Platform',
      features: [
        '12   Exclusive Venue Hire in the City Centre of Glasgow',
        '180    Complimentary DJ for parties',
        'Personalised menus',
        'In house PA/microphones for speeches',
        'Dedicated Events Coordinator',
      ],
    },
  ];

function HomePlan() {
  return (
    <div className="plan">
        <div className="container">
            <div className="top">
                <div className="top-left">
               <TitleSection 
               mainTitle= 'We’ve got a pricing plan that’s perfect for you'
               subtitle="PLAN" 
               vectorLeft="/Vector 3.svg" 
               vectorRight="/Vector 1.svg" 
               />
               </div>
          
        
            </div>
            <div className="bottom">
            {planData.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
            </div>
        </div>
    </div>
  )
}

export default HomePlan