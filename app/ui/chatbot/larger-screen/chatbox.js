'use client';

import { useEffect, useRef, useState } from 'react';
import { PaperAirplaneIcon, XCircleIcon } from '@heroicons/react/24/solid';

import { chatData } from '../../lib/chat-data';
import { modelData } from '../../lib/model-data';
import BotMessage from './bot-message';
import UserMessage from './user-message';
import { generateAnswer } from '@/app/utils/gemini-service';

export default function ChatBox({ onClick }) {
  const [chatHistory, setChatHistory] = useState(chatData);
  const [modelHistory, setModelHistory] = useState(modelData);

  const questionInputRef = useRef('');
  const chatboxRef = useRef(null);

  useEffect(() => {
    chatboxRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  });

  async function handleAskQuestionClick() {
    const question = questionInputRef.current.value;

    if (question !== '') {
      questionInputRef.current.value = '';
      setChatHistory((chatHistory) => [
        ...chatHistory,
        {
          time: Date(),
          speaker: 'user',
          message: question,
        },
      ]);

      generateAnswer(modelHistory, question, (answer) => {
        setChatHistory((chatHistory) => [
          ...chatHistory,
          {
            time: Date(),
            speaker: 'bot',
            message: answer,
          },
        ]);
      });
    }
  }

  return (
    <div className="absolute flex flex-col bottom-0 left-0 bg-chat-900 w-full h-96 rounded-xl overflow-hidden">
      {/* Chat header */}
      <div className="relative bg-chat-950 py-2">
        <h1 className="text-center text-sm">Chat Support</h1>
        <button className="absolute top-1 right-1" onClick={onClick}>
          <XCircleIcon className="w-8" />
        </button>
      </div>

      {/* Chat body */}
      <div ref={chatboxRef} className="flex-1 overflow-y-auto p-2">
        <p className="w-40 border-2 border-dashed rounded-md p-1 mx-auto text-sm text-slate-200 text-center">
          You are chatting with bot!
        </p>
        {chatHistory.map((chat) =>
          chat.speaker === 'bot' ? (
            <BotMessage key={`bot_${chat.time}`} message={chat.message} />
          ) : (
            <UserMessage key={`user_${chat.time}`} message={chat.message} />
          )
        )}
      </div>

      {/* Chat footer */}
      <div className="flex justify-between items-center bg-chat-950 py-4 px-2">
        <input
          ref={questionInputRef}
          type="text"
          placeholder="Type here..."
          className="px-4 py-1 rounded-full w-full me-4"
          onKeyDown={(e) => {
            if (e.code === 'Enter') handleAskQuestionClick();
          }}
        />
        <button onClick={handleAskQuestionClick}>
          <PaperAirplaneIcon className="h-6 -rotate-45" />
        </button>
      </div>
    </div>
  );
}
