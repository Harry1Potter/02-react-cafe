import type { Votes } from "../../types/votes";


interface VoteStatsProps {
  votes: Votes;
}

const VoteStats = ({ votes }: VoteStatsProps) => {
  return (
    <div>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
    </div>
  );
};

export default VoteStats;
