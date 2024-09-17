import React from "react";
import { IconButton, Typography, Drawer, Card } from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface SidebarProps {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
}

export function Sidebar({ isDrawerOpen, closeDrawer }: SidebarProps) {
  return (
    <>
          <Drawer
            open={isDrawerOpen}
            onClose={closeDrawer}
            placement="right"
          >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <div className="absolute right-0 items-center">
                <IconButton variant="text" onClick={closeDrawer}>
                <XMarkIcon className="h-6 w-6" />
                </IconButton>
            </div>
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>
          <div className="p-2">Products</div>
        </Card>
      </Drawer>
    </>
  );
}
