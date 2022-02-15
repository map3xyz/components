export type ProgressBarProps = {
  progress: number;
  progressText?: string;
};

const ProgressBar = ({ progress, progressText = "" }: ProgressBarProps) => {
  const _progress = Math.min(Math.max(0, progress), 100);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full border-2 border-indigo-700 h-6 rounded-md">
        <div
          className="bg-indigo-500 h-full transition-all duration-250"
          style={{ width: `${_progress}%` }}
        ></div>
      </div>
      <span>{progressText}</span>
    </div>
  );
};

export default ProgressBar;
