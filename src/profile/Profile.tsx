import { useTranslation } from "react-i18next"
import picture from '../assets/profile.jpeg'
import { motion } from "framer-motion"

type Props = {}

const container = (delay : number) => ({
  hidden : {x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5
    }
  }
})

const Profile = (props: Props) => {
  const { t } = useTranslation()

  return (
    <div className="p-7 mb-8 w-full lg:w-screen">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-5xl font-thin bg-gradient-to-r from-green-300 to-green-700 bg-clip-text text-transparent tracking-tight"
            >
              Guilherme Santos
            </motion.h2>
            <motion.h3 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-xl font-thin mb-16">
              {t('profile.profile')}
            </motion.h3>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="text-lg max-w-md mb-10">
              {t('profile.profileDescription')}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex justify-center">
            <motion.img 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="w-1/2" src={picture} alt="Guilherme Santos" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
