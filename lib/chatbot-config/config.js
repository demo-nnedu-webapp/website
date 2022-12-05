import { createChatBotMessage } from "react-chatbot-kit";

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: "Doing great! Tell me about yourself",
      handler: () => actionProvider.handleGoodMood(),
      id: 1,
    },
    {
      text: "Having a bad day...",
      handler: () => actionProvider.handleBadMood(),
      id: 2,
    },
  ];
};

const config = {
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm Jeffrey. Nice to meet you! I How are you doing today?",
      { widget: "moodOptions" }
    ),
  ],
  widgets: [
    {
      widgetName: "moodOptions",
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
  ],
};

export default config;
