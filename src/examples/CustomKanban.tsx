import React, { Dispatch, SetStateAction, useState } from "react";

const CustomKanban = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
};

export default CustomKanban;

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-screen w-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-netural-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

type ColumnProps = {
  title: string;
  headingColor: string;
  cards: CardType[];
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

const Column = ({
  title,
  headingColor,
  cards,
  column,
  setCards,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/5" : "bg-neutral-800/0"
        } `}
      >
        card
      </div>
    </div>
  );
};

type ColumnType = "backlog" | "todo" | "doing" | "done";

type CardType = {
  title: string;

  id: string;

  column: ColumnType;
};

const DEFAULT_CARDS: CardType[] = [
  // BACKLOG

  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },

  { title: "SOX compliance checklist", id: "2", column: "backlog" },

  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },

  { title: "Document Notifications service", id: "4", column: "backlog" },

  // TODO

  {
    title: "Research DB options for new microservice",

    id: "5",

    column: "todo",
  },

  { title: "Postmortem for outage", id: "6", column: "todo" },

  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING

  {
    title: "Refactor context providers to use Zustand",

    id: "8",

    column: "doing",
  },

  { title: "Add logging to daily CRON", id: "9", column: "doing" },

  // DONE

  {
    title: "Set up DD dashboards for Lambda listener",

    id: "10",

    column: "done",
  },
];
