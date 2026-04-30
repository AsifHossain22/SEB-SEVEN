// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";

import {
  LayoutDashboard,
  Bell,
  Plus,
  Search,
  Settings,
  ChevronDown,
  Zap,
  X,
  User,
} from "lucide-react";

import { useBoard } from "../context/BoardContext";

// NavbarComponent
export default function Navbar() {
  // DataAndFunctionsFromBoardContext
  const { boardTitle, updateBoardTitle } = useBoard();

  // LocalState
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(boardTitle);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotif, setShowNotif] = useState(false);

  const titleRef = useRef(null);

  // FocusInputWhenTitleEditingStarts
  useEffect(() => {
    if (isEditingTitle && titleRef.current) {
      titleRef.current.focus();
      titleRef.current.select();
    }
  }, [isEditingTitle]);

  // FunctionToSaveTitle
  const saveTitle = () => {
    const trimmed = titleInput.trim();
    if (trimmed) {
      updateBoardTitle(trimmed);
    } else {
      setTitleInput(boardTitle);
    }
    setIsEditingTitle(false);
  };

  // HandleEnterOrEscapeKey
  const handleTitleKey = (e) => {
    if (e.key === "Enter") saveTitle();
    if (e.key === "Escape") {
      setTitleInput(boardTitle);
      setIsEditingTitle(false);
    }
  };

  return (
    // NavbarContainer
    <nav
      className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-4 gap-3"
      style={{
        background: "rgba(15, 23, 42, 0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(51, 65, 85, 0.6)",
      }}
    >
      {/* LeftSection: Logo & Title */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* LogoIconContainer */}
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow-lg">
            <Zap size={16} className="text-white" fill="white" />{" "}
            {/* LightningIcon */}
          </div>
          {/* LogoName */}
          <span className="font-display font-bold text-white text-lg tracking-tight hidden sm:block">
            TaskBoard
          </span>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-slate-700 hidden sm:block" />

        {/* EditableBoardTitle */}
        <div className="flex items-center gap-1">
          {isEditingTitle ? (
            // EditingMode - ShowInputField
            <input
              ref={titleRef}
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              onBlur={saveTitle}
              onKeyDown={handleTitleKey}
              className="bg-slate-700 text-white font-semibold text-sm px-2 py-1 rounded-md border border-brand-500 outline-none"
              style={{ minWidth: "120px", maxWidth: "220px" }}
            />
          ) : (
            // ViewMode - ShowTitleText
            <button
              onClick={() => setIsEditingTitle(true)}
              className="text-white font-semibold text-sm hover:bg-slate-700 px-2 py-1 rounded-md transition-colors cursor-text"
            >
              {boardTitle}
            </button>
          )}
        </div>
      </div>

      {/* MiddleSection: SearchBar */}
      <div className="flex-1 max-w-xs hidden md:block">
        {showSearch ? (
          <div className="relative flex items-center">
            <Search size={14} className="absolute left-3 text-slate-400" />{" "}
            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cards..."
              className="w-full bg-slate-800 border border-slate-600 rounded-lg text-sm text-white placeholder-slate-500 pl-8 pr-8 py-1.5 focus:border-brand-500 transition-colors"
            />
            <button
              onClick={() => {
                setShowSearch(false);
                setSearchQuery("");
              }}
              className="absolute right-2"
            >
              <X size={14} className="text-slate-400 hover:text-white" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowSearch(true)}
            className="flex items-center gap-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg px-3 py-1.5 text-sm w-full transition-all"
          >
            <Search size={14} />
            <span>Search cards...</span>
            <span className="ml-auto text-xs bg-slate-700 px-1.5 py-0.5 rounded text-slate-400">
              /
            </span>
          </button>
        )}
      </div>

      {/* RightSection: ActionButtons */}
      <div className="flex items-center gap-1 shrink-0">
        <div className="relative">
          <button
            onClick={() => setShowNotif(!showNotif)}
            className="relative w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
          >
            <Bell size={16} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-500 rounded-full ring-2 ring-slate-900" />
          </button>

          {/* NotificationDropdown */}
          {showNotif && (
            <div
              className="absolute right-0 top-10 w-72 rounded-xl shadow-xl border border-slate-700 overflow-hidden animate-pop"
              style={{ background: "#1e293b" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
                <span className="font-semibold text-white text-sm">
                  Notifications
                </span>
                <button onClick={() => setShowNotif(false)}>
                  <X size={14} className="text-slate-400 hover:text-white" />
                </button>
              </div>
              {/* NotificationItems */}
              {[
                {
                  msg: 'Card "Build auth module" is due soon',
                  time: "2h ago",
                  color: "#ef4444",
                },
                {
                  msg: 'You were mentioned in "Design System"',
                  time: "5h ago",
                  color: "#3b82f6",
                },
                {
                  msg: '"User research" moved to In Review',
                  time: "1d ago",
                  color: "#22c55e",
                },
              ].map((n, i) => (
                <div
                  key={i}
                  className="flex gap-3 px-4 py-3 hover:bg-slate-700/50 cursor-pointer border-b border-slate-700/50 last:border-0"
                >
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ background: n.color }}
                  />
                  <div>
                    <p className="text-sm text-slate-300">{n.msg}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SettingsButton */}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
          <Settings size={16} />
        </button>

        {/* UserAvatar */}
        <button className="flex items-center gap-2 ml-1 hover:bg-slate-700 rounded-lg px-2 py-1.5 transition-all">
          {/* AvatarCircle */}
          <div className="w-7 h-7 rounded-full bg-linear-to-br from-brand-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            TF
          </div>
          <ChevronDown
            size={12}
            className="text-slate-400 hidden sm:block"
          />{" "}
        </button>
      </div>
    </nav>
  );
}
