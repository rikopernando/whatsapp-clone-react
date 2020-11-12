import {useState} from "react"
import {Avatar, IconButton} from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../axios"
import "./styles.css"

const Chat = ({messages}) => {

  const [input, setInput] = useState("")

  const sendMessage = async e => {
    e.preventDefault()

    await axios.post("/messages/new", {
      message: input,
      name: "DEMO APP",
      timestamp: "Just now",
      received: false
    })

    setInput("")
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message, key) => (
          <p key={key} className={`chat__message ${message.received && "chat__reciever"}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {message.timestamp}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message" 
            value={input} onChange={e => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
