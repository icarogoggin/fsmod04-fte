import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfilesCard({ profile }) {
  return (
    <li>
      <figure className="cardprofile">
        <Link to={`/home/${profile.id}`}>
          <img src={profile.image} alt={profile.title} width="250" height="250"/>
        </Link>
        <figcaption>
          <h2>{profile.title}</h2>
          <Link to={`/profiledelete/${profile.id}`}>
            <button className="deletebutton">Excluir</button>
          </Link>
        </figcaption>
      </figure>
    </li>
  );
}
