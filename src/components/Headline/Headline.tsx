import { IconBrowser, IconClock, IconWorld } from '@tabler/icons-react';
import { FooterItem } from './FooterItem/FooterItem';
import { Headline as THeadline } from '@types';
import Image from 'next/image';
import moment from 'moment';
import { COUNTRIES_MAP } from '@constants';

type Props = {
  headline: THeadline;
};

export const Headline = ({ headline }: Props) => {
  if (headline.title === '[Removed]') return null;

  return (
    <a
      href={headline?.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white flex gap-10 items-center py-6 hover:bg-hover hover:cursor-pointer rounded-lg px-6 border-b-[1px] border-b-hover w-full"
    >
      <section className="flex-1">
        {headline?.author ? <h4 className="text-gray font-medium">{headline.author}</h4> : null}
        <p className="text-black mt-1 text-xl font-bold">{headline.title}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {headline?.publishedAt ? (
            <FooterItem icon={<IconClock size={20} />} label={moment(headline.publishedAt).fromNow()} />
          ) : null}
          {headline?.source?.name ? <FooterItem icon={<IconBrowser size={20} />} label={headline.source.name} /> : null}
          {headline?.country ? (
            <FooterItem icon={<IconWorld size={20} />} label={COUNTRIES_MAP[headline.country].label} />
          ) : null}
        </div>
      </section>
      {headline?.urlToImage ? (
        <div>
          <Image
            src={headline.urlToImage}
            alt={headline.title}
            width={100}
            height={100}
            className="w-[100px] h-[100px] block rounded-xl"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ) : null}
    </a>
  );
};
