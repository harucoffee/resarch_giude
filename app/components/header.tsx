import { FC, useState } from 'react';
import * as React from 'react';
import TemporaryDrawer from './drawer';
import '@/app/global.css'

const Header: FC = () => {

    return (
      <div className="flex justify-center mx-auto p-2 m-2">
        <div><h1 className="text-2xl items-center">Traveling Aomori</h1></div>
        <div className="absolute right-0"><TemporaryDrawer></TemporaryDrawer></div>
      </div>
    );
};

export default Header;