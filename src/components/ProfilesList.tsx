import * as React from 'react';
import { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import { Profile } from '../common/models/Profile';

export interface ProfilesListProps {
}

export default function ProfilesList(props: ProfilesListProps) {

  const [profiles, setProfiles] = useState(new Array<Profile>())

  useEffect(() => {
    const profiles = new Array<Profile>();
    for(let i = 0; i < 4; i++){
      const profile: Profile = {name: "Name", party: "PRTY", constituency: "CONSTUN", dob: new Date(), imgUrl: "", emptyImgUrl: ""};
      profiles.push(profile);
    }
    setProfiles(profiles);
    return () => {
      console.log("Clean up!");
    };
  }, [])

  return (
    <div className='row'>
      {profiles.map(profile =>
        <div className='col-sm-2'>
          <ProfileCard profile={profile}/>
        </div>
        )}
    </div>
  );
}
