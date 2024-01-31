import { IconRecharging } from '@tabler/icons-react';

export default function Loading() {
  return (
    <main className="flex flex-1 items-center justify-center gap-2 text-gray">
      <IconRecharging size={40} />
      <p className=" font-semibold text-lg">Loading...</p>
    </main>
  );
}
