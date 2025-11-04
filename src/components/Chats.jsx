const Chats = () => {
  const chats = [
    {
      id: "b17f5e1c-51c9-4f52-9e01-7ec4b3c382c1",
      conversationId: "conv-001",
      senderId: "user-12",
      type: "TEXT",
      content: "Hey, how are you?",
      imageUrl: "",
      createdAt: "2025-01-20T10:15:00.000Z",
      updatedAt: "2025-01-20T10:15:00.000Z",
    },
    {
      id: "c24d91e9-6c48-4b28-90a9-eaf93c702ab4",
      conversationId: "conv-001",
      senderId: "user-123",
      type: "TEXT",
      content: "I'm good! What's up?",
      imageUrl: "",
      createdAt: "2025-01-20T10:16:10.000Z",
      updatedAt: "2025-01-20T10:16:10.000Z",
    },
    {
      id: "9f155d7c-d882-4b9c-a335-2e2aa39ad91c",
      conversationId: "conv-001",
      senderId: "user-123",
      type: "IMAGE",
      content: "Check this out!",
      imageUrl: "https://example.com/images/meme.png",
      createdAt: "2025-01-20T10:17:45.000Z",
      updatedAt: "2025-01-20T10:17:45.000Z",
    },
    {
      id: "f32a1b11-bf0c-47d2-a3d3-d715f75631fb",
      conversationId: "conv-002",
      senderId: "user-123",
      type: "TEXT",
      content: "Meeting is at 5 PM, don't forget.",
      imageUrl: "",
      createdAt: "2025-01-21T14:02:30.000Z",
      updatedAt: "2025-01-21T14:02:30.000Z",
    },
    {
      id: "d28f46e5-2a50-436d-bdf9-f0db971bcd21",
      conversationId: "conv-002",
      senderId: "user-3",
      type: "TEXT",
      content: "Got it, see you!",
      imageUrl: "",
      createdAt: "2025-01-21T14:05:00.000Z",
      updatedAt: "2025-01-21T14:05:00.000Z",
    },
  ];

  const sendId = "user-123";

  return (
    <div className="p-3">
      <ul className="w-full">
        {chats.map((chat) => {
          if (chat.senderId === sendId) {
            return (
              //  Left side chat
              <li className="w-fit p-1 my-2">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full overflow-hidden">
                    <img
                      src="pic.jpeg"
                      alt=""
                      className="w-full h-full object-center"
                    />
                  </div>
                  <p className="bg-white p-3 rounded-tr-sm rounded-br-sm rounded-bl-sm font-normal text-base">
                    {chat.content}
                  </p>
                </div>
                <p className="text-right font-normal text-sm mt-1">2:30PM</p>
              </li>
            );
          }
          // Right side chat
          else {
            return (
              <li className="w-fit p-1 justify-self-end">
                <div className="flex items-center space-x-3">
                  <p className="bg-white p-3 rounded-bl-sm rounded-br-sm rounded-tl-sm font-normal text-base">
                    {chat.content}
                  </p>
                </div>
                <p className="text-right font-normal text-sm">2:30PM</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Chats;
