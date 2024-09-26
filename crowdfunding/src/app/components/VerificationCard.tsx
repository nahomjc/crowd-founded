import { CheckCircle } from "lucide-react";

export default function VerificationCard() {
  const progress = 2; // Current step (1 out of 4)
  const totalSteps = 4; // Total number of steps

  return (
    <div className="bg-white md:max-h-[290px] rounded-lg shadow-md p-6 w-full mx-auto mt-3">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800">
            You're halfway there
          </h2>
          <p className="text-sm text-gray-600">
            Complete your profile to unlock all features
          </p>
        </div>
        <div className="w-20 h-20 relative">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-gray-200"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-primary"
              strokeWidth="3"
              strokeDasharray={`${(progress / totalSteps) * 100} 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-800">
              {progress}/{totalSteps}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 rounded-md p-4 flex items-start">
        <CheckCircle
          className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
          size={20}
        />
        <div>
          <p className="text-blue-800 font-semibold">
            Verify your account to start investing
          </p>
          <p className="text-blue-600 text-sm mt-1">
            Complete your profile and verify your identity to access all
            investment opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
