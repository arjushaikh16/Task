import React from 'react';

const ProfileCard = ({ profile, onSummaryClick }) => (
  <div className="profile-card">
    <img src={profile.photo} alt={`${profile.name}'s photo`} />
    <h3>{profile.name}</h3>
    <p>{profile.description}</p>
    <button onClick={() => onSummaryClick(profile)}>Summary</button>
  </div>
);

export default ProfileCard;