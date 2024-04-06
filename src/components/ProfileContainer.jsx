const ProfileContainer = () => {
  return (
    <div className="z-50 bg-white rounded-xl overflow-hidden">
      <div className="relative mb-[60px]">
        <img
          className="z-10 absolute left-[40%]  rounded-full border-4 border-white top-[50px]  h-[100px] w-[100px] object-cover "
          src="aaaaa.jpg"
        />
        <div className="  bg-black h-[100px] w-[500px]   "></div>
      </div>
      <div className=" flex items-center flex-col mb-8">
        <h1 className="font-medium">
          Ajay Vishwakarma
          <span className="font-normal text-gray-500"> 32</span>
        </h1>
        <p className="text-md text-gray-400">London</p>
      </div>
      <hr className="mb-7 border-b-2  " />
      <div className="flex justify-around p-2 mb-6">
        <Card title="80K" description="Followers" />
        <Card title="803K" description="Likes" />
        <Card title="1.4K" description="Photos" />
      </div>
    </div>
  );
};
function Card({ title, description }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default ProfileContainer;
