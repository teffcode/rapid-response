type PillStatus = 'Active' | 'Eliminated';

interface PillProps {
  status: PillStatus;
}

const Pill: React.FC<PillProps> = ({ status }) => {
  const isEliminated = status === 'Eliminated';

  return (
    <span
      className={`px-3 py-1.5 text-sm font-semibold rounded-md 
        ${isEliminated ? 'bg-eliminated-bg text-eliminated-text' : 'bg-active-bg text-active-text'}`}
    >
      {status}
    </span>
  );
};

export default Pill;
