import "../../assets/themes.scss";
import "./icon.scss";

export const Icon = ({ type }: { type: string }) => {
return (
    <span className='p-2 primary icon'>
      <i className={`fa ${type}`} />
    </span>
  );
}