import React, { RefObject, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import style from './Header.module.css';

interface Props {}

export const Header = (props: Props) => {
    const [isSearchActive, setIsSearchActive] = useState(false)

  return (
    <header className={style.header}>
      <div className={style['image-wrapper']}>
        <img
          src="https://dynamic.brandcrowd.com/preview/logodraft/d7958ca2-afed-4edc-956a-eb6f8723d34e/image/large.png"
          alt="logo"
        />
      </div>

      <div className={style.wrapper}>
          {!isSearchActive && <SearchIcon />}
        <input type="text" placeholder="Поиск" onFocus={() => setIsSearchActive(true)} />
      </div>
    </header>
  );
};
