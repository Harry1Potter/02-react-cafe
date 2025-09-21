import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css"

interface Props {
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}

const VoteOptions = ({onVote, onReset, canReset}: Props) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")} type="button">Good</button>
      <button className={css.button} onClick={() => onVote("neutral")} type="button">Neutral</button>
      <button className={css.button} onClick={() => onVote("bad")} type="button">Bad</button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;