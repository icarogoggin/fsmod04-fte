import { React, useState, useEffect } from 'react';
import { Api } from '../Api/api';
import ProfilesCard from '../ProfilesCard/ProfilesCard';

export const ProfilesList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const loadProfilesList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllProfileUrl());

      const results = await response.json();

      setProfiles(results);
    };

    loadProfilesList();
  }, []);


  return (
    <div className="profile__cardcontainer">
      <ul className="profile__cards">
        {profiles.map((profile, index) => (
          <ProfilesCard
            key={`profile_list_${index}`}
            profile={profile}
          ></ProfilesCard>
        ))}
      </ul>
    </div>
  );
};
