export default {
  title: 'General/Font',
};

export const Weight = () => (
  <div className="map3">
    <div
      className="flex items-start gap-2 dark:text-white"
      style={{ width: '500px' }}
    >
      <div className="flex w-full flex-col items-start">
        <div className="font-bold underline">Font Weight</div>
        <div className="flex flex-col items-start">
          <div className="font-extralight">font-extralight</div>
          <div className="font-thin">font-thin</div>
          <div className="font-light">font-light</div>
          <div className="font-normal">font-normal</div>
          <div className="font-medium">font-medium</div>
          <div className="font-semibold">font-semibold</div>
          <div className="font-bold">font-bold</div>
          <div className="font-extrabold">font-extrabold</div>
          <div className="font-black">font-black</div>
        </div>
      </div>
    </div>
  </div>
);
