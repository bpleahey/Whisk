import langchain
from langchain.llms import OpenAI

class ChatBot:
    """
    A chatbot that uses a language chain to generate responses.
    """

    llm = OpenAI(temperature=0)