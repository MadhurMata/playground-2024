import { useContext, createContext } from 'react';
import { ContextProps } from 'src/pages/home/Home heroes';

export const TreesContext = createContext<ContextProps | undefined>(undefined);

const useTreesContext = () => {
  const context = useContext(TreesContext);

  if (context === undefined) {
    throw new Error('useTreesContext must be used within a TreesContextProvider');
  }

  return context;
};

export default useTreesContext;
