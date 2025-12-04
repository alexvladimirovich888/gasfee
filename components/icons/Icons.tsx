import React from 'react';
import { Twitter, Send } from 'lucide-react';

export const XIcon = ({ className }: { className?: string }) => (
  <Twitter className={className} />
);

export const TelegramIcon = ({ className }: { className?: string }) => (
  <Send className={className} />
);
