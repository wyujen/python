import os
import gradio as gr
import random
from langchain.schema import HumanMessage, SystemMessage,AIMessage
from langchain.chat_models import ChatOpenAI

openai_api_key = os.getenv('OPENAI_API_KEY')
chat_opai = ChatOpenAI(temperature = 0.9, openai_api_key = openai_api_key)

def get_message_memory(system,history):
    chat_input = []
    chat_input.append(SystemMessage(content = system))
    for i in history:
        chat_input.append(HumanMessage(content = i[0]))
        if i[1] != None:
            chat_input.append(AIMessage(content = i[1]))
    return chat_input

def get_ai_ans(system,history):
    chat_input = get_message_memory(system,history)
    ai_answer = chat_opai(chat_input)
    return ai_answer.content


def chat(system, message, history):
    history = history or []
    system = message.lower()
    message = message.lower()
    response = get_ai_ans(system,history)
    history.append((message, response))

    return history , history

chatbot = gr.Chatbot()

demo = gr.Interface(
    chat,
    ["text","text", "state"],
    [chatbot, "state"],
    allow_flagging = "never",
)
demo.launch()


