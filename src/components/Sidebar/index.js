import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SiderbarChatRoom from "./chat-room"
import "./styles.css"

const Siderbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://randomuser.me/api/portraits/men/77.jpg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="siderbar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SiderbarChatRoom />
        <SiderbarChatRoom />
        <SiderbarChatRoom />
      </div>
    </div>
  )
}

export default Siderbar
