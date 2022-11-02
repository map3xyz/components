import Pill from './Pill';

export default {
  title: 'Displays/Pill',
};

export const CoinStory = () => (
  <div className="flex w-full flex-col items-start">
    <Pill color="green">Hello World</Pill>
    <Pill className="mt-2" color="green" dot>
      Hello World
    </Pill>
    <Pill
      className="mt-2"
      color="green"
      dot
      icon={<i className={`fa fa-check-circle`} />}
      role="button"
    >
      Hello World
    </Pill>
    <Pill className="mt-2" color="gray" dot role="button">
      Hello World
    </Pill>
  </div>
);
