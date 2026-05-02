// src/components/CardModal.jsx

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  AlignLeft,
  CheckSquare,
  Calendar,
  Tag,
  Plus,
  Trash2,
  Check,
  Palette,
  Type,
} from "lucide-react";
import { useBoard } from "../context/BoardContext";

// CoverColorOptions
const COVER_COLORS = [
  "#0f172a",
  "#1e3a5f",
  "#064e3b",
  "#7c3aed",
  "#92400e",
  "#831843",
  "#1e40af",
  "#065f46",
  "#6b21a8",
  "#be123c",
  "#0f766e",
  "#b45309",
];

export default function CardModal() {
  const {
    openCardId, // খোলা কার্ডের ID | ID of open card
    cards, // সব কার্ড | All cards
    labels, // সব লেবেল | All labels
    listOrder,
    lists, // লিস্ট ডেটা | List data
    closeCardModal, // মডাল বন্ধ ফাংশন | Close modal function
    updateCard, // কার্ড আপডেট | Update card
    deleteCard, // কার্ড ডিলিট | Delete card
    addChecklistItem, // চেকলিস্ট আইটেম যোগ | Add checklist item
    toggleChecklistItem, // চেকলিস্ট টগল | Toggle checklist
    deleteChecklistItem, // চেকলিস্ট আইটেম মুছুন | Delete checklist item
  } = useBoard();

  const card = openCardId ? cards[openCardId] : null;

  // LocalEditingState
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [newCheckItem, setNewCheckItem] = useState("");
  const [showAddCheck, setShowAddCheck] = useState(false);
  const [showLabelPicker, setShowLabelPicker] = useState(false);
  const [showCoverPicker, setShowCoverPicker] = useState(false);

  const titleRef = useRef(null);
  const checkRef = useRef(null);

  // UpdateLocalStateWhenCardChanges
  useEffect(() => {
    if (card) {
      setEditTitle(card.title);
      setEditDesc(card.description || "");
    }
  }, [card?.id]);

  // FocusWhenChecklistFormOpens
  useEffect(() => {
    if (showAddCheck && checkRef.current) {
      checkRef.current.focus();
    }
  }, [showAddCheck]);

  // CloseModalWithEscapeKey
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeCardModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeCardModal]);

  // DoNotRenderModalIfNoCard
  if (!card) return null;

  const listId = listOrder.find((id) => lists[id]?.cardIds.includes(card.id));
  const listTitle = listId ? lists[listId]?.title : "Unknown";

  // HandleSaveTitle
  const saveTitle = () => {
    const trimmed = editTitle.trim();
    if (trimmed) {
      updateCard(card.id, { title: trimmed });
    } else {
      setEditTitle(card.title);
    }
    setIsEditingTitle(false);
  };

  // SaveDescription
  const saveDesc = () => {
    updateCard(card.id, { description: editDesc });
    setIsEditingDesc(false);
  };

  // HandleAddCheckItemFunction
  const handleAddCheckItem = () => {
    const trimmed = newCheckItem.trim();
    if (trimmed) {
      addChecklistItem(card.id, trimmed);
      setNewCheckItem("");
      setShowAddCheck(false);
    }
  };

  // ToggleLabel
  const toggleLabel = (labelId) => {
    const currentLabels = card.labels || [];
    const newLabels = currentLabels.includes(labelId)
      ? currentLabels.filter((id) => id !== labelId)
      : [...currentLabels, labelId];
    updateCard(card.id, { labels: newLabels });
  };

  // SetCoverColor
  const setCoverColor = (color) => {
    updateCard(card.id, { coverColor: color });
    setShowCoverPicker(false);
  };

  // ChecklistProgress
  const totalChecks = card.checklist?.length ?? 0;
  const doneChecks = card.checklist?.filter((i) => i.done).length ?? 0;
  const progress =
    totalChecks > 0 ? Math.round((doneChecks / totalChecks) * 100) : 0;

  return (
    // ModalOverlay
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 pb-4 modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCardModal();
      }}
    >
      {/* ModalContainer */}
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden animate-pop max-h-[85vh] flex flex-col"
        style={{
          background: "#162032",
          border: "1px solid #2d3f55",
          boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {card.coverColor && (
          <div
            className="h-10 w-full shrink-0"
            style={{ background: card.coverColor }}
          />
        )}

        {/* ModalHeader */}
        <div className="flex items-start gap-3 px-6 pt-5 pb-0 shrink-0">
          {/* TitleIcon */}
          <Type size={18} className="text-slate-400 mt-1 shrink-0" />

          <div className="flex-1 min-w-0">
            {/* Title (Editable) */}
            {isEditingTitle ? (
              <textarea
                ref={titleRef}
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onBlur={saveTitle}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    saveTitle();
                  }
                }}
                className="w-full bg-slate-800 text-white text-lg font-semibold rounded-lg p-2 resize-none outline-none border border-brand-500"
                rows={2}
                autoFocus
              />
            ) : (
              <h2
                onClick={() => setIsEditingTitle(true)}
                className="text-lg font-semibold text-white leading-snug cursor-text hover:bg-slate-800/50 rounded-lg px-2 py-1 -mx-2 transition-colors"
              >
                {card.title}
              </h2>
            )}

            <p className="text-xs text-slate-500 mt-1 px-2">
              in list{" "}
              <span className="text-slate-400 font-medium">{listTitle}</span>
            </p>
          </div>

          <button
            onClick={closeCardModal}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        {/* ModalBody - (Scrollable) */}
        <div className="flex flex-1 overflow-hidden">
          {/* MainContentArea */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {/* LabelsDisplay */}
            {card.labels?.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Labels
                </h4>
                <div className="flex flex-wrap gap-2">
                  {card.labels.map((labelId) => {
                    const label = labels.find((l) => l.id === labelId);
                    if (!label) return null;
                    return (
                      <span
                        key={labelId}
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ background: label.color }}
                      >
                        {label.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Description */}
            <div>
              {/* SectionHeader */}
              <div className="flex items-center gap-2 mb-2">
                <AlignLeft size={15} className="text-slate-400" />
                <h4 className="text-sm font-semibold text-slate-300">
                  Description
                </h4>
              </div>

              {isEditingDesc ? (
                <div>
                  <textarea
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    placeholder="Add a more detailed description..."
                    className="w-full bg-slate-800 text-sm text-slate-200 placeholder-slate-500 rounded-xl p-3 resize-none outline-none border border-brand-500 min-h-25"
                    rows={4}
                    autoFocus
                  />
                  {/* SaveAndCancelButtons */}
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={saveDesc}
                      className="btn-primary text-xs py-1.5 px-3"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditDesc(card.description || "");
                        setIsEditingDesc(false);
                      }}
                      className="btn-ghost text-xs py-1.5 px-3"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setIsEditingDesc(true)}
                  className="min-h-15 bg-slate-800/50 hover:bg-slate-800 rounded-xl p-3 text-sm text-slate-400 cursor-text transition-colors"
                >
                  {card.description || (
                    <span className="text-slate-600 italic">
                      Add a more detailed description...
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Checklist*/}
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CheckSquare size={15} className="text-slate-400" />
                  <h4 className="text-sm font-semibold text-slate-300">
                    Checklist
                  </h4>
                  {/* ProgressPercentage */}
                  {totalChecks > 0 && (
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full
                      ${progress === 100 ? "bg-green-500/20 text-green-400" : "bg-slate-700 text-slate-400"}`}
                    >
                      {progress}%
                    </span>
                  )}
                </div>
              </div>

              {/* ProgressBar */}
              {totalChecks > 0 && (
                <div className="h-1.5 bg-slate-700 rounded-full mb-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${progress === 100 ? "bg-green-500" : "bg-brand-500"}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              {/* ChecklistItems */}
              <div className="space-y-1">
                {card.checklist?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 group py-1.5 px-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                  >
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleChecklistItem(card.id, item.id)}
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all
                        ${
                          item.done
                            ? "bg-brand-500 border-brand-500"
                            : "border-slate-600 hover:border-brand-400"
                        }`}
                    >
                      {item.done && <Check size={10} className="text-white" />}{" "}
                      {/* CheckMark */}
                    </button>

                    {/* ItemText */}
                    <span
                      className={`text-sm flex-1 ${item.done ? "line-through text-slate-600" : "text-slate-300"}`}
                    >
                      {item.text}
                    </span>

                    {/* DeleteButton (Shown on Hover) */}
                    <button
                      onClick={() => deleteChecklistItem(card.id, item.id)}
                      className="opacity-0 group-hover:opacity-100 w-5 h-5 rounded flex items-center justify-center text-slate-500 hover:text-red-400 transition-all"
                    >
                      <X size={11} />
                    </button>
                  </div>
                ))}
              </div>

              {/* AddItemSection */}
              {showAddCheck ? (
                <div className="mt-2 animate-fade-in">
                  <input
                    ref={checkRef}
                    value={newCheckItem}
                    onChange={(e) => setNewCheckItem(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAddCheckItem();
                      if (e.key === "Escape") {
                        setShowAddCheck(false);
                        setNewCheckItem("");
                      }
                    }}
                    placeholder="Add an item..."
                    className="w-full bg-slate-800 text-sm text-white placeholder-slate-500 rounded-lg p-2.5 outline-none border border-brand-500"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={handleAddCheckItem}
                      className="btn-primary text-xs py-1.5 px-3"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => {
                        setShowAddCheck(false);
                        setNewCheckItem("");
                      }}
                      className="btn-ghost text-xs py-1.5 px-3"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // AddItemButton
                <button
                  onClick={() => setShowAddCheck(true)}
                  className="flex items-center gap-2 mt-2 px-2 py-1.5 text-sm text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 rounded-lg transition-all"
                >
                  <Plus size={13} />
                  <span>Add an item</span>
                </button>
              )}
            </div>
          </div>

          {/* ===== Sidebar (Actions) ===== */}
          <div
            className="w-44 shrink-0 px-3 py-4 space-y-2 overflow-y-auto"
            style={{ borderLeft: "1px solid #2d3f55" }}
          >
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-1">
              Add to card
            </p>

            {/* LabelPicker */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowLabelPicker(!showLabelPicker);
                  setShowCoverPicker(false);
                }}
                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-slate-300 bg-slate-800/70 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Tag size={12} />
                Labels
              </button>

              {/* LabelDropdown */}
              {showLabelPicker && (
                <div
                  className="absolute right-0 top-9 w-52 rounded-xl p-2 z-50 shadow-xl animate-pop"
                  style={{ background: "#1e293b", border: "1px solid #334155" }}
                >
                  <p className="text-xs text-slate-400 mb-2 px-1">Labels</p>
                  {labels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => toggleLabel(label.id)}
                      className="flex items-center gap-2 w-full px-2 py-1.5 rounded-lg hover:bg-slate-700 transition-colors mb-1"
                    >
                      {/* LabelColor */}
                      <span
                        className="w-24 h-6 rounded-md text-xs text-white font-medium flex items-center px-2"
                        style={{ background: label.color }}
                      >
                        {label.name}
                      </span>
                      {/* CheckMark */}
                      {card.labels?.includes(label.id) && (
                        <Check size={12} className="text-brand-400 ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* DueDate */}
            <div>
              <label className="flex items-center gap-2 w-full px-3 py-2 text-xs text-slate-300 bg-slate-800/70 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer">
                <Calendar size={12} />
                <span>Due date</span>
                <input
                  type="date"
                  value={card.dueDate || ""}
                  onChange={(e) =>
                    updateCard(card.id, { dueDate: e.target.value || null })
                  }
                  className="sr-only"
                />
              </label>
              {/* ShowCurrentDueDate */}
              {card.dueDate && (
                <div className="flex items-center justify-between mt-1 px-2">
                  <span className="text-xs text-slate-400">
                    {new Date(card.dueDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  {/* RemoveDueDateButton */}
                  <button
                    onClick={() => updateCard(card.id, { dueDate: null })}
                    className="text-slate-600 hover:text-red-400 transition-colors"
                  >
                    <X size={10} />
                  </button>
                </div>
              )}
            </div>

            {/* CoverColor */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCoverPicker(!showCoverPicker);
                  setShowLabelPicker(false);
                }}
                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-slate-300 bg-slate-800/70 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Palette size={12} />
                Cover
              </button>

              {/* CoverColorPicker */}
              {showCoverPicker && (
                <div
                  className="absolute right-0 top-9 w-44 rounded-xl p-3 z-50 shadow-xl animate-pop"
                  style={{ background: "#1e293b", border: "1px solid #334155" }}
                >
                  <p className="text-xs text-slate-400 mb-2">Cover color</p>
                  <div className="grid grid-cols-4 gap-1.5">
                    {COVER_COLORS.map((color) => (
                      <button
                        key={color}
                        onClick={() => setCoverColor(color)}
                        className={`w-8 h-8 rounded-lg transition-all hover:scale-110 ${card.coverColor === color ? "ring-2 ring-white" : ""}`}
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                  {/* RemoveCoverButton */}
                  {card.coverColor && (
                    <button
                      onClick={() => {
                        updateCard(card.id, { coverColor: null });
                        setShowCoverPicker(false);
                      }}
                      className="mt-2 w-full text-xs text-slate-400 hover:text-white py-1 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Remove cover
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* DangerZone: DeleteCard */}
            <div className="pt-4 border-t border-slate-800 mt-4">
              <button
                onClick={() => {
                  deleteCard(card.id, listId);
                  closeCardModal();
                }}
                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors"
              >
                <Trash2 size={12} />
                Delete card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
