import React, {useEffect, useState} from "react"
import Pusher from "pusher-js"
import Sidebar from "./components/Sidebar/"
import Chat from "./components/Chat/"
import axios from "./axios"
import './App.css';


const App = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('165dc3f631c8929e67ee', {
      cluster: 'ap1'
    })

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
