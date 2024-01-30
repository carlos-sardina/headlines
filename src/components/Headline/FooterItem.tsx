import React from 'react';

type Props = {
  icon: React.ReactNode;
  label: string;
};

export const FooterItem = ({ icon, label }: Props) => {
  return (
    <p className="text-gray flex items-center gap-1">
      <span>{icon}</span>
      {label}
    </p>
  );
};
