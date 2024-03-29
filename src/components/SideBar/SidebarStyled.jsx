import styled from "styled-components";

export const Sidebar = styled.div`
    top: 0;
    left: 0;
    height: 100vh;
    width: 80px;
    background-color: #b21616;
    display: flex;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    /* z-index: 1000; */
    color: white;
    transition: width 0.5s ease;
    position: fixed;

    &:hover {
        width: 350px;
    }
`

export const SidebarBody = styled.div`
    display: flex;
    flex: 100%;
    flex-direction: column;
    justify-content: space-between;
`

export const Logo = styled.div`
    flex: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SidebarButtons = styled.div`
    flex: 70%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    cursor: pointer;
`

export const SidebarButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    &:hover {
        width: 350px;
    }
`

export const SidebarText = styled.span`
    position: relative;
    width: 0px;
    flex-direction: row;
    align-items: center;

    &:hover {
        flex-wrap: nowrap;
        width: 300px;
    }
`

export const Logout = styled.div`
    flex: 20%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
`

export const LogoutSection = styled.div`
    display: flex;
    gap: 2rem;
`

export const ProfileSection = styled.div`
    display: flex;
    gap: 2rem;
`
export const UserPic = styled.div`

`
export const Img = styled.img`
    border-radius: 20px;
`









/* .sidebar {
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    padding: 10px 14px;
    background: #B21616;
    transition: var(--trans-05);
}

.sidebar.close{
    width: 88px;
}

.sidebar.close .text{
    opacity: 0;
}

.sidebar header {
    position: relative;
}

.sidebar .image-text img{
    width: 40px;
    border-radius: 6px;
}

.sidebar header .image-text {
    display: flex;
    align-items: center;
}

.sidebar .image {
    min-width: 60px;
    display: flex;
    align-items: center;
}

.sidebar .text {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
}

header .image-text .header-text {
    display: flex;
    flex-direction: column;
}

.header-text .name {
    font-weight: 600;
}

.header-text .profession {
    font-weight: 600;
    margin-top: -2px;
}

.sidebar header .toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%);
    height: 25px;
    width: 25px;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--sidebar-color);font-size: 22px;
    cursor: pointer;
}

.sidebar li {
    height: 50px;
    margin-top: 10px;
    list-style: none;
    display: flex;
    align-items: center;
}

.sidebar li .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.sidebar li .icon,
.sidebarli .text {
    color: var(--text-color);
    transition: var(--trans-02);
}

.sidebar li a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 20px;
    border-radius: 6px;
    transition: var(--trans-04);
}

.sidebar li a:hover {
    background: var(--primary-color);
}

.sidebar .search-box {
    background-color: var(--primary-color-light);
}

.search-box input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: var(--primary-color-light);
}

.sidebar li :hover .icon,
.sidebar li :hover .text {
    color: var(--sidebar-color);
}

.sidebar .menu-bar {
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.sidebar .menu {
    margin-left: 10px;
}

.menu-bar .mode{
    background: var(--primary-color-light);
    margin-left: 5rem;
    padding: 10px;

}

.menu-bar .mode .moon-sun{
    height: 50px;
    width: 60px;
    display: flex;
    align-items: center;
}

.menu-bar .mode i{
    position: absolute;
}

.menu-bar .mode i.sun{
    opacity: 0;
}

.toggle-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 60px;
    cursor: pointer;
}

.switch {
    position: relative;
    height: 22px;
    width: 44px;
    border-radius: 25px;
    background: var(--toggle-color);
}

.light-switch {
    background: black;
    content: " ";
    position: absolute;
    height: 17px;
    width: 17px;
    left: 2.5px;
    border-radius: 50%;
    top: 3px;
    transition: var(--trans-04);
}

.dark-switch {
    background: rgba(67, 15, 15, 0.312);
    content: " ";
    position: absolute;
    height: 17px;
    width: 17px;
    left: 25px;
    border-radius: 50%;
    top: 3px;
    transition: var(--trans-04);
}
 */
