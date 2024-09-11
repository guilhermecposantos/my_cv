import { useTranslation } from "react-i18next"
import picture from '../assets/profile.jpeg'

type Props = {}

const Profile = (props: Props) => {

  const { t } = useTranslation()

  return (
    <div className="pb-5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="pb-2 text-5xl font-thin">
              Guilherme Santos
            </h2>
            <h3 className="text-xl font-thin mb-16">
              {t('profile.profile')}
            </h3>
            <p className="text-lg max-w-md">
              {t('profile.profileDescription')}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex justify-center">
            <img className="w-1/2" src={picture} alt="Guilherme Santos" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile