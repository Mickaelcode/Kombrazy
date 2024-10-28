import ItemBg from "/item-bg.jpg";

interface ItemProps {
  name: string;
  profession: string;
}

const ProfileCard: React.FC<ItemProps> = ({ 
  name,
  profession
}) => {
  return (
    <div className="rounded w-60 border bg-white overflow-hidden">
      <div className="overflow-hidden h-80 bg-red-400 bg-[url('/img/hero-pattern.svg')]">
        <img
          src={ItemBg}
          alt="Background alt"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="h-12 overflow-hidden hover:overflow-visible">
        <div className="bg-white text-black h-full transition-all duration-500 ease-in-out hover:transform hover:-translate-y-7">
            <div className="text-xl font-bold py-2">{name}</div>
            <div className="text-md font-semibold">{profession}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
