import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfilesCard({ profile }) {
  return (
    <li>
      <figure class="cardprofile">
        <Link to={`/home/${profile.id}`}>
          <img src={profile.image} alt={profile.title} />
        </Link>
        <figcaption>
          <h2>{profile.title}</h2>
        </figcaption>
      </figure>
    </li>
  );
}
