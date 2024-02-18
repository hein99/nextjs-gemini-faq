import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

import NavLinks from './ui/layouts/nav-links';
import SpeechBubble from './ui/speech-bubble';
import ChatBoxContainer from './ui/chatbot/larger-screen/chatbox-container';

export const metadata = {
  title: 'FAQs | Potato Heads',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-secondary-950 flex justify-center items-center h-screen`}
      >
        <div className="bg-primary-950 container rounded-3xl p-4 lg:flex lg:p-16">
          <div className="hidden lg:flex flex-col flex-1 justify-center items-center">
            <div className="relative">
              <SpeechBubble
                message="need some help?"
                tailwindClass="absolute top-0 right-0 transform -translate-y-full translate-x-full"
              />
              <Image
                priority={false}
                src="/greeting.png"
                width={247}
                height={325}
                alt="FAQ"
              />
            </div>
            <div className="relative mt-8">
              <ChatBoxContainer />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-center mb-10">
              <Image
                priority={false}
                src="/faq.png"
                width={203}
                height={81}
                alt="FAQ"
              />
            </div>
            <NavLinks />
            <main className="flex-1 mt-8 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
