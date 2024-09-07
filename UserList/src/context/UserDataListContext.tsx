import React, {createContext, useState, useEffect, ReactNode} from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: {lat: string; lng: string};
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface IUserContextType {
  usersData: User[];
  loading: boolean;
}

export const UserDataContext = createContext({} as IUserContextType);

interface UserDataProviderProps {
  children: ReactNode;
}

export const UserDataProvider: React.FC<UserDataProviderProps> = ({
  children,
}) => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error('Failed to fetch', error);
        setUsersData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <UserDataContext.Provider value={{usersData, loading}}>
      {children}
    </UserDataContext.Provider>
  );
};
