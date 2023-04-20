import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { ReactNode } from "react";

interface SideBarProps {
  selectedCategory: string;
  setSelectedCategory: (newValue: string) => void;
}

export const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        flexDirection: {
          md: "column",
        },
      }}
    >
      {(categories || []).map((category: { icon: ReactNode; name: string }) => {
        return (
          <button
            onClick={() => props.setSelectedCategory(category.name)}
            className="category-btn"
            style={{
              background:
                category.name === props.selectedCategory
                  ? "#FC1503"
                  : undefined,
              color: "white",
            }}
            key={category.name}
          >
            <span
              style={{
                color:
                  category.name === props.selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === props.selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};
