import botSection from 'components/botSection/BotSection';
import React from 'react';

import { IHeadingAndTitle } from '../../_lib/types';

const HeadingAndTitle = (props: IHeadingAndTitle) => {
  const { heading } = props;

  return (
    <div key={props._key} className="py-16 ">
      <div className="mx-auto max-w-4xl px-4 text-center text-7xl font-bold text-black">{heading}</div>
    </div>
  );
};

export default HeadingAndTitle;
