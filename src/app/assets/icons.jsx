import { Search } from "lucide-react";
// import { Users } from "lucide-react";
// import { UsersRound } from "lucide-react";
// import { User } from "lucide-react";
import {
  EarthLock,
  Earth,
  MessageCirclePlus,
  User,
  UsersRound,
  Users,
  MessageCircle,
  X,
  Camera,
  Plus,
  SmilePlus,
  SendHorizontal,
  Paperclip,
} from "lucide-react";

export function FileUploadIcon() {
  return <Paperclip color="#9CA3AF" size={18} />;
}

export function SendMessageIcon() {
  return <SendHorizontal color="#fff" size={20} />;
}

export function EmojiIcon() {
  return <SmilePlus color="#9CA3AF" size={18} />;
}

export function PlusIcon() {
  return <Plus />;
}

export function CameraIcon() {
  return <Camera />;
}

export function CancleIcon({ size, color }) {
  return <X color={color} size={size} />;
}

export function SearchIcon() {
  return <Search color="#9CA3AF" />;
}

export function UsersIcon({ color, className }) {
  return <Users color={color} className={className} />;
}

export function RoundUsersIcon({ color }) {
  return <UsersRound color={color} />;
}

export function SingleUserIcon() {
  return <User />;
}

export function LockIcon({ className }) {
  return <EarthLock className={className} />;
}

export function GlobeIcon({ className }) {
  return <Earth className={className} />;
}

export function NewConversationIcon() {
  return <MessageCirclePlus />;
}

export function ConversationsIcon() {
  return <MessageCircle />;
}
