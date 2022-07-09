import miniFaker from "minifaker";
import { useEffect, useState } from "react";
import "minifaker/locales/en";
import Story from "./Story";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    const storyUsers = miniFaker.array(20, (i) => ({
      username: miniFaker.username({ locale: "en" }).toLocaleLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
    console.log(storyUsers);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none select-none">
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
