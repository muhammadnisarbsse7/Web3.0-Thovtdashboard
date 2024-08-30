// src/App.js
import React from 'react';
import LinksCard from './LinksCard';

import { TwitterIcon } from '../Svg/TwitterIcon';
import { TelegramIcon } from '../Svg/TelegramIcon';
import { DiscordIcon } from '../Svg/DiscordIcon';
import { InstagramIcon } from '../Svg/InstagramIcon';
import { TiktokIcon } from '../Svg/TiktokIcon';
import { YoutubeIcon } from '../Svg/YoutubeIcon';
import { MediumIcon } from '../Svg/MediumIcon';
import { GitbookIcon } from '../Svg/GitbookIcon';

const Links = () => {
  const cardData = [
    { id: 1, icon: <TwitterIcon />, title: 'Twitter' },
    { id: 2, icon: <TelegramIcon />, title: 'Telegram' },
    { id: 3, icon: <DiscordIcon />, title: 'Discord' },
    { id: 4, icon: <InstagramIcon />, title: 'Instagram' },
    { id: 5, icon: <TiktokIcon />, title: 'Tiktok' },
    { id: 6, icon: <YoutubeIcon />, title: 'Youtube' },
    { id: 7, icon: <MediumIcon />, title: 'Medium' },
    { id: 8, icon: <GitbookIcon />, title: 'Gitbook' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="font-inter font-semibold text-[20px] text-white leading-5 ">
          Links
        </h1>
      </div>
      <div className="mt-[26px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((card) => (
          <LinksCard key={card.id} icon={card.icon} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Links;
