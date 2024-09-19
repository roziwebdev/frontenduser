import React from "react";
import { IconButton, Typography, Drawer, Card, Button, Input } from "@material-tailwind/react";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

interface SidebarProps {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
}

export function Sidebar({ isDrawerOpen, closeDrawer }: SidebarProps) {
  const { items, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, setQuantity } = useCartStore();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generateCheckoutMessage = () => {
    if (items.length === 0) return '';
    const message = items.map((item) => `${item.name} (${item.quantity})`).join(', ');
    return `I would like to purchase: ${message}`;
  };

  const handleCheckout = () => {
    const message = generateCheckoutMessage();
    if (message) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/085155322536?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <Drawer overlay={false} open={isDrawerOpen} onClose={closeDrawer} placement="right" className="p-4" size={380}>
      <Card color="transparent" shadow={false} className="h-[calc(100vh-2rem)] w-full p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h4" color="blue-gray" className="font-bold">
            Your Cart
          </Typography>
          <IconButton variant="text" onClick={closeDrawer}>
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </div>
        {items.length === 0 ? (
          <Typography className="text-center text-gray-500">No items in cart</Typography>
        ) : (
          <div className="flex flex-col h-full justify-between">
            <ul className="overflow-y-auto space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center space-x-4 border-b pb-2">
                  {/* Product Image */}
                  <Image src={item.image} alt={item.name} width={64} height={64} className="object-cover rounded-md" />
                  <div className="flex-1">
                    <Typography variant="h6" className="font-medium">
                      {item.name}
                    </Typography>
                    <Typography className="text-gray-500 text-sm">Rp.{item.price}</Typography>
                    <div className="flex items-center mt-2 space-x-2">
                      <Button
                        size="sm"
                        variant="text"
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        −
                      </Button>
                      {/* Quantity Input */}
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => setQuantity(item.id, parseInt(e.target.value))}
                        className="text-xs w-14 text-center border rounded-md"
                        min={1}
                      />
                      <Button
                        size="sm"
                        variant="text"
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <IconButton size="sm" variant="text" onClick={() => removeFromCart(item.id)}>
                    ✕
                  </IconButton>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Typography variant="h5" className="font-semibold mb-2">
                Total: Rp.{total.toFixed(2)}
                </Typography>
                <div className="flex gap-1">
                    <Button
                      onClick={handleCheckout}
                      className="w-full bg-blue-gray-900 hover:bg-gray-600 text-white rounded-md mb-2"
                    >
                      Checkout
                    </Button>
                    {/* Clear Cart Button */}
                    <Button
                      onClick={clearCart}
                      className="h-full  bg-red-500 hover:bg-red-600 text-white rounded-md"
                    >
                      <TrashIcon className="w-4"/>
                    </Button>
                </div>
            </div>
          </div>
        )}
      </Card>
    </Drawer>
  );
}

export default Sidebar;
