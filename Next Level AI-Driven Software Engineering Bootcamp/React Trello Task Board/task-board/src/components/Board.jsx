// src/components/Board.jsx

import React, { useState, useCallback } from "react";
// Dnd-Kit CoreImports
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCorners,
  pointerWithin,
  rectIntersection,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { Plus, X, Layers } from "lucide-react";
import { useBoard } from "../context/BoardContext";
import List from "./List";
import Card from "./Card";

export default function Board() {
  const { listOrder, lists, cards, addList, moveCard, moveList } = useBoard();

  // LocalState
  const [showAddList, setShowAddList] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");
  const [activeId, setActiveId] = useState(null);
  const [activeType, setActiveType] = useState(null);

  // DnDSensorSetup
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 8,
    },
  });

  // KeyboardSensor
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(pointerSensor, keyboardSensor);

  // HandleDragStart
  const handleDragStart = useCallback(({ active }) => {
    setActiveId(active.id);
    setActiveType(active.data.current?.type);
  }, []);

  // HandleDragEnd
  const handleDragEnd = useCallback(
    ({ active, over }) => {
      setActiveId(null);
      setActiveType(null);

      if (!over) return;

      const activeData = active.data.current;
      const overData = over.data.current;

      // ListReorder
      if (activeData?.type === "list") {
        const sourceIndex = listOrder.indexOf(active.id);
        const destIndex = listOrder.indexOf(over.id);
        if (sourceIndex !== destIndex) {
          moveList(sourceIndex, destIndex);
        }
        return;
      }

      // CardMove
      if (activeData?.type === "card") {
        const sourceListId = activeData.listId;

        let destListId, destIndex;

        if (overData?.type === "card") {
          destListId = overData.listId;
          destIndex = lists[destListId].cardIds.indexOf(over.id);
        } else if (overData?.type === "list" || lists[over.id]) {
          destListId = over.id;
          destIndex = lists[destListId]?.cardIds.length ?? 0;
        } else {
          return;
        }

        if (active.id !== over.id) {
          moveCard(active.id, sourceListId, destListId, destIndex); // কার্ড সরানো | Move card
        }
      }
    },
    [listOrder, lists, moveCard, moveList],
  );

  // AddNewList
  const handleAddList = () => {
    const trimmed = newListTitle.trim();
    if (trimmed) {
      addList(trimmed);
      setNewListTitle("");
      setShowAddList(false);
    }
  };

  const activeCard = activeId && activeType === "card" ? cards[activeId] : null;
  const activeCardListId = activeCard
    ? listOrder.find((lid) => lists[lid]?.cardIds.includes(activeId))
    : null;

  return (
    <div className="board-bg min-h-screen pt-14">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {/* BoardScrollableContainer */}
        <div className="board-scroll flex gap-4 px-6 py-6 items-start">
          {/* ListSortableContext */}
          <SortableContext
            items={listOrder}
            strategy={horizontalListSortingStrategy}
          >
            {listOrder.map((listId) => {
              const list = lists[listId];
              if (!list) return null;
              return <List key={list.id} list={list} />;
            })}
          </SortableContext>

          {/* AddNewListSection */}
          <div className="shrink-0 w-72">
            {showAddList ? (
              <div
                className="rounded-2xl p-3 animate-fade-in"
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(59, 130, 246, 0.4)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* ListTitleInput */}
                <input
                  autoFocus
                  value={newListTitle}
                  onChange={(e) => setNewListTitle(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddList();
                    if (e.key === "Escape") {
                      setShowAddList(false);
                      setNewListTitle("");
                    }
                  }}
                  placeholder="Enter list title..."
                  className="w-full bg-slate-800 text-sm text-white placeholder-slate-500 rounded-xl px-3 py-2 outline-none border border-slate-700 focus:border-brand-500 transition-colors mb-3"
                />

                {/* FormButtons */}
                <div className="flex items-center gap-2">
                  {/* AddListButton */}
                  <button
                    onClick={handleAddList}
                    disabled={!newListTitle.trim()}
                    className="btn-primary text-xs py-1.5 px-3 disabled:opacity-40"
                  >
                    Add list
                  </button>

                  {/* CancelButton */}
                  <button
                    onClick={() => {
                      setShowAddList(false);
                      setNewListTitle("");
                    }}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ) : (
              // AddListButton
              <button
                onClick={() => setShowAddList(true)}
                className="flex items-center gap-2 w-full px-4 py-3 rounded-2xl text-slate-400 hover:text-white transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Plus size={16} />
                <span className="text-sm font-medium">Add another list</span>
              </button>
            )}
          </div>
        </div>

        <DragOverlay dropAnimation={null}>
          {activeCard && (
            <div style={{ transform: "rotate(2deg)", opacity: 0.9 }}>
              <Card card={activeCard} listId={activeCardListId} />
            </div>
          )}
        </DragOverlay>
      </DndContext>

      {/* Footer */}
      <div className="fixed bottom-4 right-6 flex items-center gap-2 text-slate-600 text-xs">
        <Layers size={12} />
        <span>TaskFlow • Trello Clone</span>
      </div>
    </div>
  );
}
