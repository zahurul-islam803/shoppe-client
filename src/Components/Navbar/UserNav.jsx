import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import useCart from "../../Hooks/useCart";

const UserNav = () => {
  const [refetch, cart] = useCart();
  refetch()
  return (
    <>
      <div className="flex justify-center gap-3 items-center mr-4">
        <DropdownMenu></DropdownMenu>
        <Link className="text-[#F8AF24]" to={"/cart"}>
          <FaShoppingCart size={30}></FaShoppingCart>
          <div className="badge badge-sm badge-error text-white absolute bottom-[50px]">
            +{cart.length}
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserNav;