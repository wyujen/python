import streamlit as st
from langchain.chat_models import ChatOpenAI

from langchain.schema import HumanMessage, SystemMessage, AIMessage

import os



openai_api_key = os.getenv("OPENAI_API_KEY")
chat = ChatOpenAI(temperature=.9, openai_api_key=openai_api_key)


def get_base_show():
    st.title("AI對話訊息程式")
    systeam_message = st.text_input("輸入您的催眠")
    human_message = st.text_input("輸入您的訊息")
    return systeam_message,human_message

def ai_ans(systeam_message,human_message):
    ai_answer = chat(
        [
            SystemMessage(content=systeam_message),
            HumanMessage(content=human_message)
        ]
    )
    return ai_answer.content

def get_result_show(systeam_message,human_message):
    
    if "memory" not in st.session_state:
        st.session_state["memory"] =[]
        st.sessionn_state["memory"].extend(systeam_message)
    
    ai_message = ai_ans(systeam_message,human_message)
    st.sessionn_state["memory"].extend(
        [
        (human_message, ai_message)
        ])

    for systeam_message, human_message, ai_message in st.session_state["memory"]:
        st.write(f"您的催眠 : {systeam_message}")
        st.write(f"您的訊息：{human_message}")
        st.write(f"AI回覆 : {ai_message}")
        st.write("===================")
        


    



def main():
    systeam_message,human_message = get_base_show()
    if st.button("提交"):
        get_result_show(systeam_message,human_message)
    if st.button("刪除"):
        st.session_state["memory"] = []    
    



if __name__ == "__main__":
    main()