export const mapUserData = (user) => {
  const { uid, email, xa, displayName, phoneNumber, photoURL } = user
  return {
    id: uid,
    phone: phoneNumber,
    email,
    token: xa,
    name: displayName,
    avatar: photoURL
  }
}
