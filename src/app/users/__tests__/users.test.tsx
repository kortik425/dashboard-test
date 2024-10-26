// UserTable.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import UserTable from "../components/user-table";
import { useDataContext } from "@/context/data-context";
import { SearchFiltersProvider, useSearch } from "@/context/search-context";
import { User } from "@/interfaces/user";
import { ModalProvider } from "@/context/modal-context";

// Mocking the context
jest.mock("@/context/data-context", () => ({
  useDataContext: jest.fn(),
}));

jest.mock("@/context/search-context", () => ({
  ...jest.requireActual("@/context/search-context"), // keep actual implementation of SearchFiltersProvider
  useSearch: jest.fn(),
}));

const mockUsers: User[] = [
  {
    id: 1,
    name: "Alice",
    username: "alice123",
    email: "alice@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipcode: "12345",
    },
    phone: "555-1234",
    website: "alice.com",
    company: {
      name: "Alice Corp",
      catchPhrase: "Innovating the Future",
      bs: "business solutions",
    },
  },
  {
    id: 2,
    name: "Bob",
    username: "bob456",
    email: "bob@example.com",
    address: {
      street: "456 Side St",
      city: "Othertown",
      zipcode: "67890",
    },
    phone: "555-5678",
    website: "bob.com",
    company: {
      name: "Bob Inc",
      catchPhrase: "Making Things Better",
      bs: "improvement strategies",
    },
  },
];

(useDataContext as jest.Mock).mockReturnValue({
  usersList: mockUsers,
});

describe("UserTable", () => {
  test("renders users correctly", () => {
    (useSearch as jest.Mock).mockReturnValue({
      filters: "",
    });
    render(
      <ModalProvider>
        <SearchFiltersProvider>
          <UserTable />
        </SearchFiltersProvider>
      </ModalProvider>
    );

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  test("filters users based on the provided filter", () => {
    (useSearch as jest.Mock).mockReturnValue({
      filters: "alice",
    });
    render(
      <ModalProvider>
        <SearchFiltersProvider>
          <UserTable />
        </SearchFiltersProvider>
      </ModalProvider>
    );

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });
});
