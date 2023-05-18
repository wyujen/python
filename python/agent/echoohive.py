
from langchain import OpenAI
from langchain.agents import initialize_agent, Tool
from langchain.chains.conversation.memory import ConversationBufferMemory
import streamlit as st 

def fib(n):
    if n <= 1:
        return n 
    else:
        return (fib(n-1) + fib(n-2))
    
def sort_string(string):
    return ''.join(sorted(string))

def encypt(word):
    encrypted_word = ""
    for letter in word:
        encrypted_word += chr(ord(letter)+1)
    return encrypted_word

def decrypt(word):
    decrpted_word = ""
    for letter in word:
        decrypted_word += chr(ord(letter)-1)
    return(decrypted_word)

tools =  [
Tool(
    name = "Fibonacci",
    func= lambda n: str(fib(int(n))),
    description = "use when you want to calculate the nth fibonacci number",
    ),
Tool(
    name = "Sort String",
    func= lambda stuing: sort_string(string),
    description = "use when you want to sort a string alphabetically",
        ),
Tool(
    name = "Encrypt",
    func = lambda word :encrypt(word),
    description = "use when you want to encrypt a word",
    ),
Tool(
    name = "Decrypt",
    func = lambda word :decrypt(word),
    description = "use when you eant to decrypt a word",
    )
]

memory = ConversationBufferMemory(memory_key="chat_history")
llm = OpenAI(temperature=0, verbose = True)
agent_chain = initialize_agent(tools, llm , agent= "conversational-react-description",memory=memory, verbose=True)

st.header(":blue [Langchain chatbot with agent/tools and memory] :sunglasses:")
user_input = st.text_input("You: ")
if "memory" not in st.session_state:
    st.session_state["memory"] = ""

if st.button("Submit"):
    st.markdown(agent_chain.run(input=user_input))

    st.session_state["memory"] += memory.buffer
    print(st.session_state["memory"])