import { User } from '@firebase/auth';
import { useEffect, useState } from 'react'; 
import { AuthContext } from './authContext';
import { auth } from './firebase';

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const user = auth.onAuthStateChanged(fbUser => {
            setUser(fbUser);
        });
        return user;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;