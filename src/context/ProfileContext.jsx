import { createContext } from 'react'
import profile from '../data/profile'

export const ProfileContext = createContext();

function ProfileProvider({ children }) {
    return (
        <ProfileContext value={profile}>
            {children}
        </ProfileContext>
    )
}

export default ProfileProvider;