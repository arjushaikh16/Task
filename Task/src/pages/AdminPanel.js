import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProfile, editProfile, deleteProfile } from '../redux/profilesSlice';

const AdminPanel = () => {
  const profiles = useSelector(state => state.profiles.profiles);
  const dispatch = useDispatch();
  const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '', location: { lat: 0, lng: 0 } });

  const handleAdd = () => {
    dispatch(addProfile({ ...newProfile, id: Date.now() }));
    setNewProfile({ name: '', photo: '', description: '', location: { lat: 0, lng: 0 } });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
        />
        <button onClick={handleAdd}>Add Profile</button>
      </div>
      <div>
        {profiles.map(profile => (
          <div key={profile.id}>
            <h3>{profile.name}</h3>
            <button onClick={() => dispatch(deleteProfile(profile.id))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;