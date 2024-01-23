import { 
  Header
} from "@sharing/organisms"

function Layout({children}) {

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
