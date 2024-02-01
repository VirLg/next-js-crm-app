import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'Suspended',
}
export interface LableStatusProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

const LableStatus = ({ children, status, disabled }: LableStatusProps) => {
  return (
    <span
      className={`inline-flex items-center py-1 px-3.5 rounded-lg text-sm hover:opacity-55 disabled:opacity-15 font-medium ${
        (status === Status.Active && 'text-green-700 bg-green-100') ||
        (status === Status.NotActive && 'text-red-700 bg-red-100') ||
        (status === Status.Pending && 'text-orange-700 bg-orange-100') ||
        (status === Status.Suspended && 'text-blue-700 bg-blue-100') ||
        ''
      }`}
    >
      <div className="w-1 h-1 rounded-full bg-current" />
      {children}
    </span>
  );
};

export default LableStatus;
