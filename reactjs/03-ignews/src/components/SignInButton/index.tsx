import styles from './styles.module.scss';

import { signIn, signOut, useSession} from 'next-auth/client'

import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

export function SignInButton () {
  const [session] = useSession();

  return !!session ? (
    <button 
      type="button" 
      className={styles.signInButton}
      onClick={() => signOut()}  
    >
      <FaGithub color="#04d361"/>
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ): (
    <button 
      type="button" 
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>
  )
}