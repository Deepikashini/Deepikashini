import { useSelector } from "react-redux";

const Cart = () => {
    const item = useSelector(store => store.cart.items);
    console.log("item", item);
    return (
        <>
            <h1 className="mt-20 ml-20 font-bold text-xl">Shopping Cart</h1>
            
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-4 gap-x-50 mt-5 ml-20  mr-40 border border-gray-400">
                    <span className="font-bold text-base">Product</span>
                    <span className="font-bold text-base">Unit Price</span>
                    <span className="font-bold text-base">Qty</span>
                    <span className="font-bold text-base">Price</span>
                </div>
            </div>
            {item.map((prod) => (
                
                <div className="grid grid-cols-4 gap-x-50 mt-5 ml-20  mr-40 border border-gray-400">
                <span className="font-bold text-base">{prod.name}</span>
                <span className="font-bold text-base">{prod.price / 100}</span>
                <span className="font-bold text-base">{}</span>
                <span className="font-bold text-base">{prod.price}</span>
            </div>
            ))}
            
        </>
    );
}

export default Cart;