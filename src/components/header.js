import React, {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
  
  div {
    background: #525d4d;
    width: 1.5rem;
    height: 0.1rem;
    border-radius: 5px;
    transform-origin:1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0deg)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`
const MenuLinks = styled.nav`
  ul {
    list-style-type:none;
    width:10vw;
  }
  li {
    color: #113129;
  }
  a {
    text-decoration:none;
    color:#113129;
    :hover {
      color: green;
    }
  }
  li, p {
    border-top: 1px #113129 solid;
  }
  display:flex;
  flex-direction:row;
  top:0;
  left: 0;
  background: #eae3db;
  margin-top: 5rem;
  padding-left: 5rem;
  position:absolute;
  height:100vh;
  transition: transform ease 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(-100%)")};
`
const MenuDrop = styled.p`
  padding:0;
  width:10vw;
  background: transparent;
  :hover {
    cursor: pointer;
    color: green;
  }
`
const MenuProduct = styled.ul`
  display: ${({ prd }) => (prd ? "none" : "block")}; 
  li {
    border: none !important;
  }

`
  const MenuBlog = styled.ul`
  display: ${({ blog }) => (blog ? "none" : "block")}; 
  li {
    border: none !important;
  }
`
const Header = () => {
  const [nav, showNav] = useState(false)
  const [prd, showProduct] = useState(false)
  const [blog, showBlog] = useState(false)
  return(
    <header
      style={{
        position: `fixed`,
        width: `100vw`,
        background: `#eae3db`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 1.5rem`,
          maxWidth: `100vw`,
          padding: `1.45rem 1.0875rem`,
        }}
        >
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <h1 style={{ margin: `0`, textAlign: `center` }}>
        Planthyful
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
          </Link>
        </h1>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li style={{border:"none !important"}}>
          <MenuDrop onClick={() => showProduct(!prd)}>
            Product
          </MenuDrop>
            <MenuProduct prd={prd}>
              <li>
                <a href="#">Selai Kacang</a>
              </li>
              <li>
                <a href="#">Pemanis Alami</a>
              </li>  
            </MenuProduct>
          </li>
          <li>
            <a href="#">Etos Kami</a>
          </li>
          <li style={{border:"none !important"}}>
          <MenuDrop onClick={() => showBlog(!blog)}>
          Blog
          </MenuDrop>
            <MenuBlog blog={blog}>
              <li>
                <a href="#">Artikel</a>
              </li>
              <li>
                <a href="#">Berita</a>
              </li>  
              <li>
                <a href="#">Resep</a>
              </li>  
            </MenuBlog>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Cara Beli</a>
          </li>
          <li>
            <a href="#">Kontak Kami</a>
          </li>
        </ul>
        <ul>
          
        </ul>
      </MenuLinks>
        
      </div>
    </header>
  )

}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
