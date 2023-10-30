import { IBot } from '_lib/types';
import { PortableText } from '@portabletext/react';
import Image from 'components/Image';
import Script from 'next/script';
import React from 'react';

type IRhobotWebChatComponent = {
  'tenant-id': string;
  'instance-id': string;
  'subscription-key': string;

  'node-id'?: string;
  'conversation-key'?: string;
  'user-id'?: string;
  'user-name'?: string;
  'user-tags'?: string;
  locale?: string;
  debug?: boolean;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'rhobot-webchat': IRhobotWebChatComponent;
    }
  }
}

const BotSection = (props: IBot) => {
  const { tenantId, instanceId, subscriptionKey, debug, autoScroll, heading, content, image } = props;

  return (
    <div className="mx-auto min-h-screen py-2">
      <div className="grid grid-flow-row auto-rows-max gap-8 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* main content */}
        <main className="mx-auto mt-28 max-w-3xl md:max-h-[85vh] md:p-8">
          <div>
            <Image {...image} className="mb-8 mt-8 max-w-sm lg:max-w-md" />
            <h1 className="text-2xl font-bold text-black">{heading}</h1>
            <div className="mt-4">
              <PortableText value={content} />
            </div>
          </div>
        </main>
        {/* aside content */}
        <Script type="module" src="https://dev.rhobot.studio/cdn/rhobot-components/rhobot-components.esm.js"></Script>
        <aside className="mx-auto mt-8 max-w-4xl overflow-auto rounded-lg bg-white shadow-2xl md:max-h-[85vh] md:min-h-[800px] md:p-8">
          <div id="rhobot-webchat"></div>
        </aside>
      </div>
      <rhobot-webchat
        tenant-id={tenantId}
        instance-id={instanceId}
        subscription-key={subscriptionKey}
        debug={debug}
        auto-scroll={autoScroll}></rhobot-webchat>
    </div>
  );
};

export default BotSection;
