export default class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, {
      widget: "personalOptions",
    });
    this.updateChatbotState(message);
  }

  async handleBadMood() {
    const jokeData = await (
      await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    ).json();
    const message = this.createChatBotMessage(
      `Let me tell you a joke: ${jokeData.joke}`,
      {
        widget: "jokeOptions",
      }
    );
    this.updateChatbotState(message);
  }
}
