import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="mb-20 flex items-center justify-center py-6">
      <div className='m-8 flex items-center justify-center gap-3'>
        <FaLinkedin />
        <FaGithub />
        <FaGoogle />
      </div>
    </nav>
  )
}

export default Navbar