import { createContext } from 'react';

const AppContext = createContext({ user: {}, token: '', signOut: undefined });

export default AppContext;