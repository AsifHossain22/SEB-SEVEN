// src/context/BoardContext.jsx

// GlobalStateManagementUsingReactContextAPI

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
// v4UUIDForUniqueIDGeneration
import { v4 as uuidv4 } from "uuid";

// InitialDataAndActionTypes

// DemoLabelData
const LABELS = [
  { id: "l1", name: "Design", color: "#a855f7" },
  { id: "l2", name: "Dev", color: "#3b82f6" },
  { id: "l3", name: "Urgent", color: "#ef4444" },
  { id: "l4", name: "Review", color: "#eab308" },
  { id: "l5", name: "Done", color: "#22c55e" },
  { id: "l6", name: "Research", color: "#14b8a6" },
];

// InitialState
const initialState = {
  boardTitle: "Product Roadmap",
  boardBg: "gradient-blue",
  listOrder: ["list-1", "list-2", "list-3", "list-4"],
  lists: {
    "list-1": {
      id: "list-1",
      title: "📋 Backlog",
      cardIds: ["card-1", "card-2", "card-3"],
    },
    "list-2": {
      id: "list-2",
      title: "🚀 In Progress",
      cardIds: ["card-4", "card-5"],
    },
    "list-3": {
      id: "list-3",
      title: "👀 In Review",
      cardIds: ["card-6"],
    },
    "list-4": {
      id: "list-4",
      title: "✅ Done",
      cardIds: ["card-7", "card-8"],
    },
  },

  // CardsData
  cards: {
    "card-1": {
      id: "card-1",
      title: "Define product vision and OKRs",
      description:
        "Outline the product vision for Q3 and set key results for each team.",
      labels: ["l1", "l6"],
      dueDate: "2025-07-15",
      checklist: [
        { id: "ci-1", text: "Research competitors", done: true },
        { id: "ci-2", text: "Draft vision document", done: true },
        { id: "ci-3", text: "Present to stakeholders", done: false },
      ],
      coverColor: null,
    },
    "card-2": {
      id: "card-2",
      title: "User research interviews",
      description:
        "Schedule and conduct 10 user interviews for the new onboarding flow.",
      labels: ["l6"],
      dueDate: "2025-07-20",
      checklist: [
        { id: "ci-4", text: "Create interview script", done: true },
        { id: "ci-5", text: "Recruit participants", done: false },
        { id: "ci-6", text: "Conduct interviews", done: false },
        { id: "ci-7", text: "Synthesize findings", done: false },
      ],
      coverColor: "#7c3aed",
    },
    "card-3": {
      id: "card-3",
      title: "Update design system tokens",
      description: "Align design tokens with the new brand guidelines.",
      labels: ["l1"],
      dueDate: null,
      checklist: [],
      coverColor: null,
    },
    "card-4": {
      id: "card-4",
      title: "Build authentication module",
      description:
        "Implement OAuth2 + JWT based authentication with refresh tokens.",
      labels: ["l2", "l3"],
      dueDate: "2025-07-10",
      checklist: [
        { id: "ci-8", text: "Setup OAuth provider", done: true },
        { id: "ci-9", text: "Implement JWT", done: true },
        { id: "ci-10", text: "Write unit tests", done: false },
      ],
      coverColor: "#0f172a",
    },
    "card-5": {
      id: "card-5",
      title: "Redesign onboarding screens",
      description: "Create new onboarding UI based on user research findings.",
      labels: ["l1", "l2"],
      dueDate: "2025-07-25",
      checklist: [
        { id: "ci-11", text: "Wireframes", done: true },
        { id: "ci-12", text: "High-fidelity mockups", done: false },
      ],
      coverColor: "#1e3a5f",
    },
    "card-6": {
      id: "card-6",
      title: "API rate limiting implementation",
      description: "Add rate limiting middleware to all public API endpoints.",
      labels: ["l2", "l4"],
      dueDate: "2025-07-08",
      checklist: [
        { id: "ci-13", text: "Choose algorithm", done: true },
        { id: "ci-14", text: "Implement middleware", done: true },
        { id: "ci-15", text: "Load test", done: false },
      ],
      coverColor: null,
    },
    "card-7": {
      id: "card-7",
      title: "Setup CI/CD pipeline",
      description:
        "GitHub Actions workflow for automated testing and deployment.",
      labels: ["l2", "l5"],
      dueDate: "2025-06-30",
      checklist: [
        { id: "ci-16", text: "Configure GitHub Actions", done: true },
        { id: "ci-17", text: "Setup staging env", done: true },
        { id: "ci-18", text: "Setup production deploy", done: true },
      ],
      coverColor: null,
    },
    "card-8": {
      id: "card-8",
      title: "Define brand color palette",
      description:
        "Finalize the primary, secondary, and semantic color tokens.",
      labels: ["l1", "l5"],
      dueDate: "2025-06-25",
      checklist: [],
      coverColor: "#064e3b",
    },
  },

  // AllLabels
  labels: LABELS,

  // ModalState
  openCardId: null,
};

// ActionTypeConstants
export const ACTIONS = {
  // CardActions
  ADD_CARD: "ADD_CARD",
  UPDATE_CARD: "UPDATE_CARD",
  DELETE_CARD: "DELETE_CARD",
  MOVE_CARD: "MOVE_CARD",

  // ListActions
  ADD_LIST: "ADD_LIST",
  UPDATE_LIST: "UPDATE_LIST",
  DELETE_LIST: "DELETE_LIST",
  MOVE_LIST: "MOVE_LIST",

  // ChecklistActions
  ADD_CHECKLIST_ITEM: "ADD_CHECKLIST_ITEM",
  TOGGLE_CHECKLIST_ITEM: "TOGGLE_CHECKLIST_ITEM",
  DELETE_CHECKLIST_ITEM: "DELETE_CHECKLIST_ITEM",

  // BoardActions
  UPDATE_BOARD_TITLE: "UPDATE_BOARD_TITLE",

  // ModalActions
  OPEN_CARD_MODAL: "OPEN_CARD_MODAL",
  CLOSE_CARD_MODAL: "CLOSE_CARD_MODAL",
};

// ReducerFunction
function boardReducer(state, action) {
  switch (action.type) {
    // ========== AddACard ==========
    case ACTIONS.ADD_CARD: {
      const { listId, title } = action.payload;
      const newCard = {
        id: uuidv4(),
        title,
        description: "",
        labels: [],
        dueDate: null,
        checklist: [],
        coverColor: null,
      };
      return {
        ...state,
        cards: {
          ...state.cards,
          [newCard.id]: newCard,
        },
        lists: {
          ...state.lists,
          [listId]: {
            ...state.lists[listId],
            cardIds: [...state.lists[listId].cardIds, newCard.id],
          },
        },
      };
    }

    // UpdateACard
    case ACTIONS.UPDATE_CARD: {
      const { cardId, updates } = action.payload;
      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            ...state.cards[cardId],
            ...updates,
          },
        },
      };
    }

    // DeleteACard
    case ACTIONS.DELETE_CARD: {
      const { cardId, listId } = action.payload;

      const { [cardId]: deletedCard, ...remainingCards } = state.cards;

      return {
        ...state,
        cards: remainingCards,
        lists: {
          ...state.lists,
          [listId]: {
            ...state.lists[listId],
            cardIds: state.lists[listId].cardIds.filter((id) => id !== cardId),
          },
        },
      };
    }

    // MoveACard (Drag & Drop)
    case ACTIONS.MOVE_CARD: {
      const { cardId, sourceListId, destListId, destIndex } = action.payload;

      // RemoveCardFromSourceList
      const sourceCardIds = state.lists[sourceListId].cardIds.filter(
        (id) => id !== cardId,
      );

      if (sourceListId === destListId) {
        // ReorderWithinSameList
        const newCardIds = [...sourceCardIds];
        newCardIds.splice(destIndex, 0, cardId);
        return {
          ...state,
          lists: {
            ...state.lists,
            [sourceListId]: {
              ...state.lists[sourceListId],
              cardIds: newCardIds,
            },
          },
        };
      }

      // MoveToDifferentList
      const destCardIds = [...state.lists[destListId].cardIds];
      destCardIds.splice(destIndex, 0, cardId);

      return {
        ...state,
        lists: {
          ...state.lists,
          [sourceListId]: {
            ...state.lists[sourceListId],
            cardIds: sourceCardIds,
          },
          [destListId]: { ...state.lists[destListId], cardIds: destCardIds },
        },
      };
    }

    // AddAList
    case ACTIONS.ADD_LIST: {
      const { title } = action.payload;
      const newList = {
        id: uuidv4(),
        title,
        cardIds: [],
      };
      return {
        ...state,
        lists: { ...state.lists, [newList.id]: newList },
        listOrder: [...state.listOrder, newList.id],
      };
    }

    // UpdateAList
    case ACTIONS.UPDATE_LIST: {
      const { listId, title } = action.payload;
      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: { ...state.lists[listId], title },
        },
      };
    }

    // DeleteAList
    case ACTIONS.DELETE_LIST: {
      const { listId } = action.payload;
      const list = state.lists[listId];

      // DeleteAllCardsInThatList
      const newCards = { ...state.cards };
      list.cardIds.forEach((cardId) => delete newCards[cardId]);

      // RemoveList
      const { [listId]: deletedList, ...remainingLists } = state.lists;

      return {
        ...state,
        cards: newCards,
        lists: remainingLists,
        listOrder: state.listOrder.filter((id) => id !== listId),
      };
    }

    // MoveAList (Drag & Drop)
    case ACTIONS.MOVE_LIST: {
      const { sourceIndex, destIndex } = action.payload;
      const newOrder = [...state.listOrder];
      const [moved] = newOrder.splice(sourceIndex, 1);
      newOrder.splice(destIndex, 0, moved);
      return { ...state, listOrder: newOrder };
    }

    // AddChecklistItem
    case ACTIONS.ADD_CHECKLIST_ITEM: {
      const { cardId, text } = action.payload;
      const newItem = { id: uuidv4(), text, done: false };
      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            ...state.cards[cardId],
            checklist: [...state.cards[cardId].checklist, newItem],
          },
        },
      };
    }

    // ToggleChecklistItem
    case ACTIONS.TOGGLE_CHECKLIST_ITEM: {
      const { cardId, itemId } = action.payload;
      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            ...state.cards[cardId],
            checklist: state.cards[cardId].checklist.map((item) =>
              item.id === itemId ? { ...item, done: !item.done } : item,
            ),
          },
        },
      };
    }

    // DeleteChecklistItem
    case ACTIONS.DELETE_CHECKLIST_ITEM: {
      const { cardId, itemId } = action.payload;
      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            ...state.cards[cardId],
            checklist: state.cards[cardId].checklist.filter(
              (item) => item.id !== itemId,
            ),
          },
        },
      };
    }

    // UpdateBoardTitle
    case ACTIONS.UPDATE_BOARD_TITLE:
      return { ...state, boardTitle: action.payload.title };

    // ModalActions
    case ACTIONS.OPEN_CARD_MODAL:
      return { ...state, openCardId: action.payload.cardId };

    case ACTIONS.CLOSE_CARD_MODAL:
      return { ...state, openCardId: null };

    default:
      return state;
  }
}

// CreateContext - Board Context

const BoardContext = createContext(null);

// ProviderComponent

// BoardProvider
export function BoardProvider({ children }) {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  // ActionCreators (Helper Functions)

  // FunctionToAddACard
  const addCard = useCallback(
    (listId, title) =>
      dispatch({ type: ACTIONS.ADD_CARD, payload: { listId, title } }),
    [],
  );

  // FunctionToUpdateACard
  const updateCard = useCallback(
    (cardId, updates) =>
      dispatch({ type: ACTIONS.UPDATE_CARD, payload: { cardId, updates } }),
    [],
  );

  // Function to delete a card
  const deleteCard = useCallback(
    (cardId, listId) =>
      dispatch({ type: ACTIONS.DELETE_CARD, payload: { cardId, listId } }),
    [],
  );

  // FunctionToMoveACard
  const moveCard = useCallback(
    (cardId, sourceListId, destListId, destIndex) =>
      dispatch({
        type: ACTIONS.MOVE_CARD,
        payload: { cardId, sourceListId, destListId, destIndex },
      }),
    [],
  );

  // FunctionToAddAList
  const addList = useCallback(
    (title) => dispatch({ type: ACTIONS.ADD_LIST, payload: { title } }),
    [],
  );

  // FunctionToUpdateAList
  const updateList = useCallback(
    (listId, title) =>
      dispatch({ type: ACTIONS.UPDATE_LIST, payload: { listId, title } }),
    [],
  );

  // FunctionToDeleteAList
  const deleteList = useCallback(
    (listId) => dispatch({ type: ACTIONS.DELETE_LIST, payload: { listId } }),
    [],
  );

  // FunctionToMoveAList
  const moveList = useCallback(
    (sourceIndex, destIndex) =>
      dispatch({
        type: ACTIONS.MOVE_LIST,
        payload: { sourceIndex, destIndex },
      }),
    [],
  );

  // FunctionToAddChecklistItem
  const addChecklistItem = useCallback(
    (cardId, text) =>
      dispatch({ type: ACTIONS.ADD_CHECKLIST_ITEM, payload: { cardId, text } }),
    [],
  );

  // FunctionToToggleChecklistItem
  const toggleChecklistItem = useCallback(
    (cardId, itemId) =>
      dispatch({
        type: ACTIONS.TOGGLE_CHECKLIST_ITEM,
        payload: { cardId, itemId },
      }),
    [],
  );

  // FunctionToDeleteChecklistItem
  const deleteChecklistItem = useCallback(
    (cardId, itemId) =>
      dispatch({
        type: ACTIONS.DELETE_CHECKLIST_ITEM,
        payload: { cardId, itemId },
      }),
    [],
  );

  // FunctionToUpdateBoardTitle
  const updateBoardTitle = useCallback(
    (title) =>
      dispatch({ type: ACTIONS.UPDATE_BOARD_TITLE, payload: { title } }),
    [],
  );

  //  OpenModal
  const openCardModal = useCallback(
    (cardId) =>
      dispatch({ type: ACTIONS.OPEN_CARD_MODAL, payload: { cardId } }),
    [],
  );

  // CloseModal
  const closeCardModal = useCallback(
    () => dispatch({ type: ACTIONS.CLOSE_CARD_MODAL }),
    [],
  );

  // ContextValue
  const value = {
    ...state,

    // ActionFunctions
    addCard,
    updateCard,
    deleteCard,
    moveCard,
    addList,
    updateList,
    deleteList,
    moveList,
    addChecklistItem,
    toggleChecklistItem,
    deleteChecklistItem,
    updateBoardTitle,
    openCardModal,
    closeCardModal,
  };

  // Provider
  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}

// CustomHook

export function useBoard() {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("useBoard must be used within a BoardProvider");
  }

  return context;
}
