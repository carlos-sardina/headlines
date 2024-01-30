import { IconClock, IconMicrophone2 } from '@tabler/icons-react';
import { FooterItem } from './FooterItem';

const image =
  'https://i.abcnewsfe.com/a/2ecf31e7-48f2-4ae5-bb96-7b29310c8bd8/Jamie-Dimon-gty-bb-240130_1706640945116_hpMain_16x9.jpg?w=1600';

export const Headline = () => {
  return (
    <article className="bg-white flex gap-10 items-center py-6 hover:bg-hover hover:cursor-pointer rounded-lg px-6 border-b-[1px] border-b-hover">
      <section className="flex-1">
        <h4 className="text-gray font-medium">The New York Times</h4>
        <p className="text-black mt-1 text-xl font-bold">
          Trump Stays on Ballot in Illinois, State Board Rules - The New York Times
        </p>
        <div className="mt-4 flex gap-4 text-sm">
          <FooterItem icon={<IconClock size={20} />} label="14h ago" />
          <FooterItem icon={<IconMicrophone2 size={20} />} label="ABC News" />
        </div>
      </section>
      <div>
        <img src={image} alt="test" className="w-[100px] h-[100px] block rounded-xl" style={{ objectFit: 'cover' }} />
      </div>
    </article>
  );
};
