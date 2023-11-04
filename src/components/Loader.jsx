import { ImSpinner3 } from "react-icons/im";
const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center">
      <ImSpinner3 className="animate-spin" size="40" />
    </div>
  );
};

export default Loader;
