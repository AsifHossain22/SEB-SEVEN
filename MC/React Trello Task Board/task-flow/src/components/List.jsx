// src/components/List.jsx

import React, { useState, useRef, useEffect } from 'react';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Plus,
  MoreHorizontal,
  Trash2,
  X,
  GripVertical,
  Pencil,
} from 'lucide-react';
import { useBoard } from '../context/BoardContext';
import Card from './Card';

export default function List({ list }) {
  const { cards, addCard, updateList, deleteList } = useBoard();

  const [showAddCard, setShowAddCard] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState(list.title);
  const [showMenu, setShowMenu] = useState(false);

  const addCardRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (showAddCard && addCardRef.current) {
      addCardRef.current.focus();
    }
  }, [showAddCard]);

  useEffect(() => {
    if (isEditingTitle && titleRef.current) {
      titleRef.current.focus();
      titleRef.current.select();
    }
  }, [isEditingTitle]);

  // SortableListDrag - dnd-kit
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: list.id,
    data: { type: 'list' },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  // HandleAddCard
  const handleAddCard = () => {
    const trimmed = newCardTitle.trim();
    if (trimmed) {
      addCard(list.id, trimmed);
    }
    setNewCardTitle(''); // ClearInput
    setShowAddCard(false); // HideForm
  };

  // HandleAddCardKey
  const handleAddCardKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddCard();
    }
    if (e.key === 'Escape') {
      setNewCardTitle(''); // ClearInput
      setShowAddCard(false); // HideForm
    }
  };

  // HandleSaveTitle
  const saveTitle = () => {
    const trimmed = titleValue.trim();
    if (trimmed) {
      updateList(list.id, trimmed); // UpdateInContext
    } else {
      setTitleValue(list.title); // RestoreOldTitle
    }
    setIsEditingTitle(false); // ExitEditingMode
  };

  // KeyHandlerForTitle
  const handleTitleKey = e => {
    // Save
    if (e.key === 'Enter') saveTitle();
    // Cancel
    if (e.key === 'Escape') {
      setTitleValue(list.title);
      setIsEditingTitle(false);
    }
  };

  const listCards = list.cardIds
    .map(cardId => cards[cardId]) // FindCardByID
    .filter(Boolean); // FilterMissingCards

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        flex-shrink-0 w-72 flex flex-col max-h-full
        ${isDragging ? 'opacity-50' : ''}
      `}
    >
      {/* ListInnerContainer */}
      <div
        className="flex flex-col rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(51, 65, 85, 0.7)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
          maxHeight: 'calc(100vh - 120px)',
        }}
      >
        {/* ListHeader */}
        <div
          className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(51, 65, 85, 0.5)' }}
        >
          {/* DragByHeaderHandleArea */}
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing text-slate-600 hover:text-slate-400 transition-colors"
          >
            <GripVertical size={14} />
          </div>

          {/* EditableListTitle */}
          <div className="flex-1 min-w-0">
            {isEditingTitle ? (
              // EditingMode
              <input
                ref={titleRef}
                value={titleValue}
                onChange={e => setTitleValue(e.target.value)}
                onBlur={saveTitle}
                onKeyDown={handleTitleKey}
                className="list-title-input text-slate-100"
                style={{ color: 'var(--text-primary)' }}
              />
            ) : (
              // ViewMode
              <button
                onClick={() => setIsEditingTitle(true)}
                className="text-sm font-semibold text-slate-200 hover:text-white cursor-text text-left w-full truncate transition-colors"
                title="Click to edit"
              >
                {list.title}
                {/* CardCountBadge */}
                <span className="ml-2 text-xs font-normal text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded-full">
                  {listCards.length} {/* NumberOfCards */}
                </span>
              </button>
            )}
          </div>

          {/* ListMenuButton */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setShowMenu(!showMenu)} // ToggleMenu
              className="w-6 h-6 rounded-md flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-slate-700 transition-all"
            >
              <MoreHorizontal size={14} />
            </button>

            {/* DropdownMenu */}
            {showMenu && (
              <div
                className="absolute right-0 top-8 w-44 rounded-xl overflow-hidden shadow-xl z-50 animate-pop"
                style={{ background: '#1e293b', border: '1px solid #334155' }}
              >
                {/* EditTitleButton */}
                <button
                  onClick={() => {
                    setIsEditingTitle(true);
                    setShowMenu(false);
                  }}
                  className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  <Pencil size={13} />
                  <span>Edit title</span>
                </button>

                {/* Divider */}
                <div className="h-px bg-slate-700 mx-2" />

                {/* DeleteListButton */}
                <button
                  onClick={() => {
                    deleteList(list.id);
                    setShowMenu(false);
                  }}
                  className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 size={13} />
                  <span>Delete list</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SortableContext */}
        <SortableContext
          items={list.cardIds}
          strategy={verticalListSortingStrategy}
        >
          <div
            className="flex-1 overflow-y-auto px-2 py-2 flex flex-col gap-2"
            style={{ minHeight: '60px' }}
          >
            {/* RenderEachCard */}
            {listCards.map(card => (
              <Card key={card.id} card={card} listId={list.id} />
            ))}

            {/* EmptyStateMessageWhenNoCards */}
            {listCards.length === 0 && !showAddCard && (
              <div className="flex-1 flex items-center justify-center py-6">
                <p className="text-xs text-slate-600 text-center">
                  Drop cards here
                </p>
              </div>
            )}
          </div>
        </SortableContext>

        {/* AddCardSection */}
        <div className="px-2 pb-2 flex-shrink-0">
          {/* AddCardForm */}
          {showAddCard ? (
            <div
              className="rounded-xl p-2 animate-fade-in"
              style={{
                background: '#1e2d3d',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}
            >
              <textarea
                ref={addCardRef}
                value={newCardTitle}
                onChange={e => setNewCardTitle(e.target.value)}
                onKeyDown={handleAddCardKey}
                placeholder="Enter a title for this card..."
                className="auto-resize w-full bg-transparent text-sm text-slate-200 placeholder-slate-500 p-1 rounded-md focus:outline-none resize-none"
                rows={2}
              />

              {/* FormButtons */}
              <div className="flex items-center gap-2 mt-2">
                {/* AddCardButton */}
                <button
                  onClick={handleAddCard}
                  disabled={!newCardTitle.trim()}
                  className="btn-primary text-xs py-1.5 px-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Add card
                </button>

                {/* CancelButton */}
                <button
                  onClick={() => {
                    setShowAddCard(false);
                    setNewCardTitle('');
                  }}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowAddCard(true)}
              className="flex items-center gap-2 w-full px-2 py-2 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/5 text-sm transition-all"
            >
              <Plus size={15} />
              <span>Add a card</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
