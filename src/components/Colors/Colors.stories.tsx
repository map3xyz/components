import colors from 'tailwindcss/colors';
import { DefaultColors } from 'tailwindcss/types/generated/colors';

export default {
  title: 'General/Colors',
};

export const All = () => (
  <div
    className="flex items-start gap-2 dark:text-white"
    style={{ width: '500px' }}
  >
    <div className="flex w-full items-start gap-2">
      {Object.keys(colors)
        .filter(
          (color) => typeof colors[color as keyof DefaultColors] === 'object'
        )
        .map((color) => (
          <div className="flex flex-col items-start gap-2">
            <div className="font-bold capitalize underline">{color}</div>
            {typeof colors[color as keyof DefaultColors] === 'object' ? (
              Object.keys(colors[color as keyof DefaultColors]).map((shade) => (
                <div className="flex items-center gap-2">
                  <div
                    className={`whitespace-nowrap rounded-md px-2 py-1 text-xs ${
                      Number(shade) > 400 ? 'text-white' : 'text-black'
                    }`}
                    style={{
                      backgroundColor:
                        // @ts-ignore
                        colors[color as keyof DefaultColors][shade],
                    }}
                  >
                    {color}-{shade}
                  </div>
                </div>
              ))
            ) : (
              <div
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor: colors[
                    color as keyof DefaultColors
                  ] as string,
                }}
              ></div>
            )}
          </div>
        ))}
    </div>
  </div>
);
