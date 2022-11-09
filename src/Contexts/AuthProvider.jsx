import {getAuth} from 'firebase/auth'
import app from '../firebase.config';
import { createContext, useState } from 'react';

const auth = getAuth(app);
const authContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;