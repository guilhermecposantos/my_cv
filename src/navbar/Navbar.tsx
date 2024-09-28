import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="mb-20 flex items-center justify-center py-6">
      <div className='m-8 flex items-center justify-center gap-5'>
        <a href='https://www.linkedin.com/in/guilhermecpoliveirasantos'>
          <FaLinkedin />
        </a>
        <a href='https://github.com/guilhermecposantos'>
          <FaGithub />
        </a>
        <a href="mailto:guicposantos@gmail.com">
          <FaGoogle />
        </a>        
      </div>
    </nav>
  )
}

export default Navbar