import type { Votes, VoteType } from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import { useState } from "react";

const initialVotes: Votes = {good: 0, neutral: 0, bad: 0};

const App = () => {
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (type:VoteType): void => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }

  const resetVotes = (): void => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true}/>
      <VoteStats votes={votes}/>
    </div>
  );
};

export default App;
