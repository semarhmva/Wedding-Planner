import React from 'react';
import '../styles/TeamCard.css'; 

const teamMembers = [
    {
        name: 'Nolan Korsgard',
        title: 'Founder & Owner',
        image: './person.svg',
        social: {
            facebook: 'https://facebook.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    },
    {
        name: 'Jaylon Vaccaro',
        title: 'Founder & Owner',
        image: './person2.svg',
        social: {
            facebook: 'https://facebook.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    },
    {
        name: 'Rhiel Madsen',
        title: 'Manager',
        image: './person3.svg',
        social: {
            facebook: 'https://facebook.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    },
    {
        name: 'Cooper Suris',
        title: 'Manager',
        image: './person4.svg',
        social: {
            facebook: 'https://facebook.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    }
];

const TeamCard = () => {
    return (
        <div className="team-card-container">
            {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                    />
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                    <div className="social-icons">
                        <a href={member.social.facebook}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9201 2.24H8.75008C8.47008 2.24 8.12008 2.31 8.12008 2.8V5.04H10.9201V7.28H8.12008V14H5.88008V7.28H3.08008V5.04H5.88008V3.08C5.88008 1.05 6.86008 0 8.75008 0H10.9201V2.24Z" fill="#1C1C1E"/>
</svg>
                        </a>
                        <a href={member.social.linkedin}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.08 13.9299H0.07V4.26989H3.08V13.9299ZM1.54 3.07989C0.63 3.07989 0 2.44989 0 1.60989C0 0.769893 0.63 0.139893 1.61 0.139893C2.59 0.139893 3.15 0.769893 3.15 1.60989C3.15 2.44989 2.59 3.07989 1.54 3.07989ZM14 13.9299H10.99V8.60989C10.99 7.34989 10.57 6.50989 9.45 6.50989C8.61 6.50989 8.12 7.06989 7.91 7.62989C7.84 7.83989 7.84 8.11989 7.84 8.39989V13.9299H4.83V7.34989C4.83 6.15989 4.76 5.17989 4.76 4.26989H7.35L7.49 5.59989H7.56C7.98 4.96989 8.89 4.05989 10.5 4.05989C12.46 4.05989 13.93 5.38989 13.93 8.18989V13.9299H14Z" fill="#1C1C1E"/>
</svg>
                        </a>
                        <a href={member.social.twitter}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 4.13008V4.48008C12.6 8.26008 9.73 12.6701 4.41 12.6701C2.8 12.6701 1.26 12.1801 0 11.4101C0.21 11.4101 0.49 11.4801 0.7 11.4801C2.03 11.4801 3.29 10.9901 4.27 10.2201C3.01 10.2201 1.96 9.38008 1.61 8.26008C1.82 8.26008 1.96 8.33008 2.17 8.33008C2.45 8.33008 2.73 8.33008 2.94 8.26008C1.61 7.98008 0.7 6.86008 0.7 5.46008V5.39008C0.7 5.60008 1.47 5.74008 1.96 5.74008C1.19 5.25008 0.63 4.34008 0.63 3.36008C0.63 2.80008 0.77 2.31008 1.05 1.89008C2.45 3.64008 4.55 4.76008 7 4.90008C6.86 4.62008 6.79 4.41008 6.79 4.20008C6.79 2.59008 8.05 1.33008 9.66 1.33008C10.5 1.33008 11.2 1.68008 11.76 2.24008C12.39 2.10008 13.02 1.89008 13.58 1.54008C13.37 2.24008 12.88 2.80008 12.32 3.15008C12.88 3.08008 13.44 2.94008 14 2.73008C13.58 3.22008 13.16 3.71008 12.6 4.13008Z" fill="#1C1C1E"/>
</svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;
