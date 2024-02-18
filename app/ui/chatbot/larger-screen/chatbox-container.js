'use client';

import { useState } from 'react';
import Button from './button';
import ChatBox from './chatbox';

export default function ChatBoxContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && <ChatBox onClick={() => setIsOpen(false)} />}
      <Button onClick={() => setIsOpen(true)} />
    </div>
  );
}
