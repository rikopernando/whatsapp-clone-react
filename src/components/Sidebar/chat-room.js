import {Avatar} from '@material-ui/core';

const SiderbarChatRoom = () => {
  return (
    <div className="sidebarChatRoom">
      <Avatar />
      <div className="sidebarChatRoom__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SiderbarChatRoom