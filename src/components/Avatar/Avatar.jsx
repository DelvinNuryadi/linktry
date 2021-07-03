import { useGetFullName } from '../../hooks/useGetFullName'
import { useAvatar } from '../../hooks/useAvatar'
import { userConfig } from '../../_Config/userConfig'
import AvatarHtml from './AvatarHtml'

export default function Avatar() {
  const avatarUrl = userConfig.avatar
  const altUsernameImg = `${userConfig.username} - avatar`
  const { isLoading, isErrorAvatarUrl, avatarFetched } = useAvatar({
    avatarUrl,
  })

  const fullName = useGetFullName(userConfig)

  console.log(fullName)

  return (
    <AvatarHtml
      fullName={fullName}
      altUsernameImg={altUsernameImg}
      isLoading={isLoading}
      isErrorAvatarUrl={isErrorAvatarUrl}
      userConfig={userConfig}
      avatarFetched={avatarFetched}
    />
  )
}
