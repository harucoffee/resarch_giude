import { FC, useState } from 'react';
import * as React from 'react';
import TemporaryDrawer from './drawer';
import '@/app/global.css'

const Header: FC = () => {

    return (
      <div className="flex">
        <div><h1 className="text-4xl">Aomori Guide</h1></div>
        <div><TemporaryDrawer></TemporaryDrawer></div>
      </div>
    );
};

export default Header;