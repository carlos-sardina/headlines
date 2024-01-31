import { IconClock, IconMicrophone2 } from '@tabler/icons-react';
import { FooterItem } from './FooterItem';
import { Headline as THeadline } from '@types';

type Props = {
  headline: THeadline;
};

export const Headline = ({ headline }: Props) => {
  if (headline.title === '[Removed]') return null;

  return (
    <article className="bg-white flex gap-10 items-center py-6 hover:bg-hover hover:cursor-pointer rounded-lg px-6 border-b-[1px] border-b-hover w-full">
      <section className="flex-1">
        {headline?.author ? <h4 className="text-gray font-medium">{headline.author}</h4> : null}
        <p className="text-black mt-1 text-xl font-bold">{headline.title}</p>
        <div className="mt-4 flex gap-4 text-sm">
          {headline?.publishedAt ? <FooterItem icon={<IconClock size={20} />} label={headline.publishedAt} /> : null}
          {headline?.source?.name ? (
            <FooterItem icon={<IconMicrophone2 size={20} />} label={headline.source.name} />
          ) : null}
        </div>
      </section>
      {headline?.urlToImage ? (
        <div>
          <img
            src={headline.urlToImage}
            alt={headline.title}
            className="w-[100px] h-[100px] block rounded-xl"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ) : null}
    </article>
  );
};