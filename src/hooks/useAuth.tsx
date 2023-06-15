import React, { useState, useEffect } from "react"
import Keycloak from "keycloak-js"

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    const client = new Keycloak({
      url: "",
      realm: "",
      clientId: "",
    })
  }, [])

  return true
}
export default useAuth
