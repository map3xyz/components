import { Asset, Network } from '@map3xyz/assets-helper/dist';
import React from 'react';

import { Badge } from '../Badge';
import ReadOnlyText from '../Inputs/ReadOnlyText';

const Coin: React.FC<Props> = ({ coin, tmpLogo }) => {
  return (
    <div className="h-fit w-full rounded-md border border-neutral-200 p-4 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
      <div className="relative w-fit">
        {coin?.logo?.svg || coin?.logo?.png ? (
          <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-300 dark:bg-white">
            <img
              className="block h-12 rounded-full"
              src={coin?.logo?.svg || coin?.logo?.png}
            />
          </div>
        ) : (
          <div className="mb-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-700">
            <img className="" id={tmpLogo} />
          </div>
        )}
        {coin.type ? (
          <div className="absolute -top-2.5 -right-2.5 flex h-3 w-3 items-center justify-center rounded-full border border-blue-400 bg-blue-200 p-3">
            {
              <span
                aria-label={coin.type === 'network' ? 'Network' : 'Asset'}
                className="hint--right hint--no-animate"
              >
                {coin.type === 'network' ? '🌐' : '💰'}
              </span>
            }
          </div>
        ) : null}
      </div>
      <h1 className="mb-4 flex gap-2 text-xl font-bold">
        {coin?.name}
        <Badge color={coin?.active ? 'green' : 'red'} dot>
          {coin?.active ? 'Active' : 'Not Active'}
        </Badge>
      </h1>
      <div>
        <h4 className="mt-2 mb-0.5 text-sm font-bold">Asset ID</h4>
        <ReadOnlyText copyButton value={coin?.id} />
      </div>
      <div className="mt-2 flex w-full gap-2">
        <div className="w-full">
          <h4 className="mb-0.5 text-sm font-bold">Symbol</h4>
          <ReadOnlyText value={coin?.symbol} />
        </div>
        {coin?.type === 'network' ? (
          <div className="w-full">
            <h4 className="mb-0.5 text-sm font-bold">Chain ID</h4>
            <ReadOnlyText value={(coin as Network).identifiers?.chainId} />
          </div>
        ) : null}
      </div>
      <div className="mt-2 flex w-full gap-2">
        <div className="w-full">
          <h4 className="mb-0.5 text-sm font-bold">Decimals</h4>
          <ReadOnlyText value={coin.decimals} />
        </div>
        <div className="w-full">
          <h4 className="mb-0.5 whitespace-nowrap text-sm font-bold">
            Network Code
          </h4>
          <ReadOnlyText value={coin?.networkCode} />
        </div>
        <div className="w-full">
          <h4 className="mb-0.5 text-sm font-bold">Color</h4>
          <ReadOnlyText
            preview={
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: coin.color || '#000000' }}
              />
            }
            value={coin?.color || '#000000'}
          />
        </div>
      </div>
      {coin.type === 'asset' ? (
        <div className="mt-2">
          <h4 className="mb-0.5 text-sm font-bold">Address</h4>
          <ReadOnlyText copyButton value={coin?.address} />
        </div>
      ) : (
        <div className="mt-2 flex w-full gap-2">
          <div className="w-full">
            <h4 className="mb-0.5 text-sm font-bold">Address Regex</h4>
            <ReadOnlyText copyButton value={(coin as Network).regex?.address} />
          </div>
          {(coin as Network).regex?.memo ? (
            <div className="w-full">
              <h4 className="mb-0.5 text-sm font-bold">Memo Regex</h4>
              <ReadOnlyText copyButton value={(coin as Network).regex?.memo} />
            </div>
          ) : null}
        </div>
      )}
      {coin?.description?.en ? (
        <div className="mt-2">
          <h4 className="mb-0.5 text-sm font-bold">Description</h4>
          <p className="text-sm leading-4">{coin?.description?.en || ''}</p>
        </div>
      ) : null}
      {coin.tags && coin.tags.length > 0 ? (
        <div className="mt-2">
          <h4 className="mb-0.5 text-sm font-bold">Tags</h4>
          <div className="flex flex-wrap gap-1">
            {coin.tags?.map((tag) => {
              return (
                <Badge color="green" dot key={tag}>
                  {tag}
                </Badge>
              );
            })}
          </div>
        </div>
      ) : null}
      {/* @ts-ignore */}
      {coin.links &&
      /*@ts-ignore*/
      Object.keys(coin?.links).filter((link) => coin.links[link]).length > 0 ? (
        <div className="mt-2">
          <h4 className="mb-0.5 text-sm font-bold">Links</h4>
          <div className="flex gap-2">
            {coin.links &&
              Object.keys(coin.links)
                // @ts-ignore
                .filter((link) => coin.links[link])
                .map((link) => (
                  // @ts-ignore
                  <a href={coin.links[link]} target="_blank">
                    {link === 'website' ? (
                      <span
                        aria-label="Website"
                        className="hint--top hint--no-animate"
                      >
                        <i className="fas fa-globe" />
                      </span>
                    ) : link === 'explorer' ? (
                      <span
                        aria-label="Explorer"
                        className="hint--top hint--no-animate"
                      >
                        <i className="fas fa-search" />
                      </span>
                    ) : link === 'twitter' ? (
                      <span
                        aria-label="Twitter"
                        className="hint--top hint--no-animate"
                      >
                        <i className="fa fa-brands fa-twitter" />
                      </span>
                    ) : link === 'research' ? (
                      <span
                        aria-label="Research"
                        className="hint--top hint--no-animate"
                      >
                        <i className="fas fa-flask" />
                      </span>
                    ) : link === 'github' ? (
                      <span
                        aria-label="GitHub"
                        className="hint--top hint--no-animate"
                      >
                        <i className="fa fa-brands fa-github" />
                      </span>
                    ) : link === 'medium' ? (
                      <span
                        aria-label="Medium"
                        className="hint--top hint--no-animate"
                      >
                        <i className="fa fa-brands fa-medium" />
                      </span>
                    ) : link === 'reddit' ? (
                      <span
                        aria-label="Reddit"
                        className="hint--top hint--no-animate"
                      >
                        <i className="fa fa-brands fa-reddit" />
                      </span>
                    ) : link === 'whitepaper' ? (
                      <span
                        aria-label="Whitepaper"
                        className="hint--top hint--no-animate"
                      >
                        <i className="fa fa-file-code" />
                      </span>
                    ) : (
                      '🔗'
                    )}{' '}
                  </a>
                ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

type Props = {
  coin: Partial<Network | Asset>;
  tmpLogo?: string;
};

export default Coin;
