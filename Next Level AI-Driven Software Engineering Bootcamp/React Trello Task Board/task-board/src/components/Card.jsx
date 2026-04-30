// src/components/Card.jsx

import React, { useState } from "react";

// Drag-SortableHookFromDnd-Kit
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { CheckSquare, Calendar, AlignLeft, Pencil, Trash2 } from "lucide-react";

import { useBoard } from "../context/BoardContext";

export default function Card({ card, listId }) {
  // FunctionsFromBoardContext
  const { deleteCard, openCardModal, labels } = useBoard();

  // HoverState
  const [isHovered, setIsHovered] = useState(false);

  // Dnd-Kit SortableSetup
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
    data: { type: "card", listId },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    zIndex: isDragging ? 999 : "auto",
  };

  // ComputedValues

  // CalculateChecklistProgress
  const totalChecks = card.checklist?.length ?? 0;
  const doneChecks = card.checklist?.filter((i) => i.done).length ?? 0;
  const checkProgress =
    totalChecks > 0 ? Math.round((doneChecks / totalChecks) * 100) : 0;
  const allDone = totalChecks > 0 && doneChecks === totalChecks;

  // DueDateFormatAndStatus
  const getDueDateInfo = () => {
    if (!card.dueDate) return null;

    const due = new Date(card.dueDate);
    const now = new Date();
    const diff = due - now;

    const isOverdue = diff < 0;
    const isDueSoon = diff > 0 && diff < 86400000;

    // FormatTheDate
    const formatted = due.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    return { formatted, isOverdue, isDueSoon };
  };

  const dueDateInfo = getDueDateInfo();

  // ExtractLabelObjectsForThisCard
  const cardLabels = (card.labels || [])
    .map((labelId) => labels.find((l) => l.id === labelId))
    .filter(Boolean);

  return (
    // CardContainer
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        group relative rounded-xl cursor-grab active:cursor-grabbing
        transition-all duration-200 overflow-hidden
        card-enter
        ${isDragging ? "opacity-40 scale-95" : ""}
      `}
      style={{
        ...style,
        background: isHovered
          ? "linear-gradient(135deg, #2f3f54, #283548)"
          : "#1e2d3d",
        border: isHovered
          ? "1px solid rgba(59, 130, 246, 0.3)"
          : "1px solid rgba(51, 65, 85, 0.6)",
        boxShadow: isHovered
          ? "0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.1)"
          : "0 2px 8px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {card.coverColor && (
        <div className="h-8 w-full" style={{ background: card.coverColor }} />
      )}

      {/* CardContent */}
      <div className="p-3">
        {/* LabelPills */}
        {cardLabels.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {cardLabels.map((label) => (
              // LabelPill
              <span
                key={label.id}
                className="label-pill"
                style={{ background: label.color }}
                title={label.name}
              />
            ))}
          </div>
        )}

        {/* CardTitle */}
        <p className="text-sm text-slate-200 font-medium leading-snug">
          {card.title}
        </p>

        {/* MetadataBadges */}

        {/* ShowMetaSectionIf - description, due date or checklist Exists */}
        {(card.description || dueDateInfo || totalChecks > 0) && (
          <div className="flex flex-wrap items-center gap-2 mt-2.5">
            {/* DescriptionBadge */}
            {card.description && (
              <div
                className="flex items-center gap-1 text-slate-500"
                title="Has description"
              >
                <AlignLeft size={11} />{" "}
              </div>
            )}

            {/* DueDateBadge */}
            {dueDateInfo && (
              <div
                className={`
                  flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-md font-medium
                  ${
                    dueDateInfo.isOverdue
                      ? "bg-red-500/20 text-red-400"
                      : dueDateInfo.isDueSoon
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-slate-700 text-slate-400"
                  }
                `}
              >
                <Calendar size={10} />
                {dueDateInfo.formatted}
              </div>
            )}

            {/* ChecklistProgressBadge */}
            {totalChecks > 0 && (
              <div
                className={`
                  flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-md font-medium
                  ${
                    allDone
                      ? "bg-green-500/20 text-green-400"
                      : "bg-slate-700 text-slate-400"
                  }
                `}
              >
                <CheckSquare size={10} />
                {doneChecks}/{totalChecks}
              </div>
            )}
          </div>
        )}

        {/* ChecklistProgressBar */}
        {totalChecks > 0 && (
          <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${allDone ? "bg-green-500" : "bg-brand-500"}`}
              style={{ width: `${checkProgress}%` }}
            />
          </div>
        )}
      </div>

      {/* HoverActionButtons */}
      <div
        className={`
          absolute top-2 right-2 flex gap-1
          transition-all duration-150
          ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
        `}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            openCardModal(card.id);
          }}
          className="w-6 h-6 rounded-md bg-slate-700/90 hover:bg-brand-600 flex items-center justify-center transition-colors"
          title="Edit card"
        >
          <Pencil size={10} className="text-slate-300" />
        </button>

        {/* DeleteButton */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // StopEventBubbling
            deleteCard(card.id, listId);
          }}
          className="w-6 h-6 rounded-md bg-slate-700/90 hover:bg-red-600 flex items-center justify-center transition-colors"
          title="Delete card"
        >
          <Trash2 size={10} className="text-slate-300" />
        </button>
      </div>

      {/* ClickOnCardToOpenModal */}
      <button
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onClick={() => openCardModal(card.id)}
        aria-label={`Open card: ${card.title}`}
      />
    </div>
  );
}
