/* eslint-disable react/prop-types */

const CommonWrapper = ({ children }) => {
  return (
    <div className="max-w-[1250px] py-0.5 px-4 mx-auto my-auto ">
      {children}
    </div>
  );
};

export default CommonWrapper;
